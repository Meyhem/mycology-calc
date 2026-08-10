import { useEffect, useMemo, useState } from 'react';
import { SUBSTRATES, LC_RECIPES, AGAR_RECIPES } from './data/recipes';
import { I18N } from './data/i18n';
import LanguageSwitch from './components/LanguageSwitch';
import Tabs from './components/Tabs';
import SubstrateTab from './components/SubstrateTab';
import LcTab from './components/LcTab';
import AgarTab from './components/AgarTab';

const LANG_KEY = 'subcalc_lang';

const SUBSTRATE_IDS = Object.keys(SUBSTRATES);
const LC_IDS = Object.keys(LC_RECIPES);
const AGAR_IDS = Object.keys(AGAR_RECIPES);

function readInitialLang() {
  if (typeof window === 'undefined') return 'en';
  return localStorage.getItem(LANG_KEY) || 'en';
}

export default function App() {
  const [lang, setLang] = useState(readInitialLang);
  const [activeTab, setActiveTab] = useState('substrate');

  // Substrate tab state
  const [substrateId, setSubstrateId] = useState(SUBSTRATE_IDS[0]);
  const [spawn, setSpawn] = useState(1000);

  // Liquid culture tab state
  const [lcId, setLcId] = useState(LC_IDS[0]);
  const [lcJarVol, setLcJarVol] = useState(300);
  const [lcJarCount, setLcJarCount] = useState(4);

  // Agar tab state
  const [agarId, setAgarId] = useState(AGAR_IDS[0]);
  const [agarPlateVol, setAgarPlateVol] = useState(25);
  const [agarPlateCount, setAgarPlateCount] = useState(10);

  const t = I18N[lang];

  useEffect(() => {
    localStorage.setItem(LANG_KEY, lang);
    document.documentElement.lang = lang;
    document.title = t.ui.pageTitle.replace(/^\S+\s/, '');
  }, [lang, t]);

  // Keep selected recipe ids valid if the data set ever changes (defensive, mirrors original behaviour
  // where populateSelect() preserves the previous value if still present).
  useEffect(() => {
    if (!SUBSTRATES[substrateId]) setSubstrateId(SUBSTRATE_IDS[0]);
  }, [substrateId]);
  useEffect(() => {
    if (!LC_RECIPES[lcId]) setLcId(LC_IDS[0]);
  }, [lcId]);
  useEffect(() => {
    if (!AGAR_RECIPES[agarId]) setAgarId(AGAR_IDS[0]);
  }, [agarId]);

  const substrateResult = useMemo(() => {
    const spawnNum = parseFloat(spawn);
    if (!spawnNum || spawnNum <= 0) return null;
    return SUBSTRATES[substrateId].calc(spawnNum);
  }, [substrateId, spawn]);

  const lcTotalVolume = useMemo(() => {
    const jarVolNum = parseFloat(lcJarVol);
    const jarCountNum = parseFloat(lcJarCount);
    if (!jarVolNum || jarVolNum <= 0 || !jarCountNum || jarCountNum <= 0) return null;
    return jarVolNum * jarCountNum;
  }, [lcJarVol, lcJarCount]);

  const lcResult = useMemo(() => {
    if (lcTotalVolume === null) return null;
    return LC_RECIPES[lcId].calc(lcTotalVolume);
  }, [lcId, lcTotalVolume]);

  const agarTotalVolume = useMemo(() => {
    const plateVolNum = parseFloat(agarPlateVol);
    const plateCountNum = parseFloat(agarPlateCount);
    if (!plateVolNum || plateVolNum <= 0 || !plateCountNum || plateCountNum <= 0) return null;
    return plateVolNum * plateCountNum * 1.1;
  }, [agarPlateVol, agarPlateCount]);

  const agarResult = useMemo(() => {
    if (agarTotalVolume === null) return null;
    return AGAR_RECIPES[agarId].calc(agarTotalVolume);
  }, [agarId, agarTotalVolume]);

  return (
    <div className="wrap">
      <header>
        <h1 id="pageTitle">{t.ui.pageTitle}</h1>
        <p id="pageSubtitle">{t.ui.pageSubtitle}</p>
        <LanguageSwitch lang={lang} onChange={setLang} label={t.ui.langLabel} />
      </header>

      <Tabs active={activeTab} onChange={setActiveTab} ui={t.ui} />

      <SubstrateTab
        active={activeTab === 'substrate'}
        ui={t.ui}
        texts={t.substrates}
        substrateId={substrateId}
        setSubstrateId={setSubstrateId}
        spawn={spawn}
        setSpawn={setSpawn}
        result={substrateResult}
      />

      <LcTab
        active={activeTab === 'lc'}
        ui={t.ui}
        texts={t.lc}
        lcId={lcId}
        setLcId={setLcId}
        jarVol={lcJarVol}
        setJarVol={setLcJarVol}
        jarCount={lcJarCount}
        setJarCount={setLcJarCount}
        result={lcResult}
        totalVolume={lcTotalVolume}
      />

      <AgarTab
        active={activeTab === 'agar'}
        ui={t.ui}
        texts={t.agar}
        agarId={agarId}
        setAgarId={setAgarId}
        plateVol={agarPlateVol}
        setPlateVol={setAgarPlateVol}
        plateCount={agarPlateCount}
        setPlateCount={setAgarPlateCount}
        result={agarResult}
        totalVolume={agarTotalVolume}
      />
    </div>
  );
}
