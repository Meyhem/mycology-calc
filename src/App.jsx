import { useEffect, useMemo, useState } from 'react';
import { SUBSTRATES, LC_RECIPES, AGAR_RECIPES } from './data/recipes';
import { GRAIN_RECIPES } from './data/grain';
import { SPECIES } from './data/species';
import { I18N } from './data/i18n';
import LanguageSwitch from './components/LanguageSwitch';
import UnitSwitch from './components/UnitSwitch';
import ThemeSwitch from './components/ThemeSwitch';
import Tabs from './components/Tabs';
import SubstrateTab from './components/SubstrateTab';
import GrainTab from './components/GrainTab';
import LcTab from './components/LcTab';
import AgarTab from './components/AgarTab';
import SpeciesTab from './components/SpeciesTab';
import ConditionsTab from './components/ConditionsTab';
import YieldTab from './components/YieldTab';
import DryingTab from './components/DryingTab';

const LANG_KEY = 'subcalc_lang';
const UNIT_KEY = 'subcalc_unit';
const THEME_KEY = 'subcalc_theme';

const SUBSTRATE_IDS = Object.keys(SUBSTRATES);
const LC_IDS = Object.keys(LC_RECIPES);
const AGAR_IDS = Object.keys(AGAR_RECIPES);
const GRAIN_IDS = Object.keys(GRAIN_RECIPES);
const SPECIES_IDS = Object.keys(SPECIES);

function readInitialLang() {
  if (typeof window === 'undefined') return 'en';
  return localStorage.getItem(LANG_KEY) || 'en';
}

function readInitialUnit() {
  if (typeof window === 'undefined') return 'metric';
  return localStorage.getItem(UNIT_KEY) || 'metric';
}

function readInitialTheme() {
  if (typeof window === 'undefined') return 'auto';
  return localStorage.getItem(THEME_KEY) || 'auto';
}

export default function App() {
  const [lang, setLang] = useState(readInitialLang);
  const [unit, setUnit] = useState(readInitialUnit);
  const [theme, setTheme] = useState(readInitialTheme);
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

  // Grain spawn tab state
  const [grainId, setGrainId] = useState(GRAIN_IDS[0]);
  const [grainJarVol, setGrainJarVol] = useState(350);
  const [grainJarCount, setGrainJarCount] = useState(6);

  // Species guide tab state
  const [speciesId, setSpeciesId] = useState(SPECIES_IDS[0]);

  // Fruiting conditions check tab state
  const [conditionsSpeciesId, setConditionsSpeciesId] = useState(SPECIES_IDS[0]);
  const [conditionsTemp, setConditionsTemp] = useState('');
  const [conditionsHumidity, setConditionsHumidity] = useState('');
  const [conditionsFae, setConditionsFae] = useState('medium');
  const [conditionsLight, setConditionsLight] = useState('low');

  // Yield estimator tab state
  const [yieldSpeciesId, setYieldSpeciesId] = useState(SPECIES_IDS[0]);
  const [yieldSubstrateId, setYieldSubstrateId] = useState(SUBSTRATE_IDS[0]);
  const [yieldWetWeight, setYieldWetWeight] = useState(3000);

  // Drying helper tab state
  const [dryingSpeciesId, setDryingSpeciesId] = useState(SPECIES_IDS[0]);
  const [dryingThickness, setDryingThickness] = useState('medium');

  const t = I18N[lang];

  useEffect(() => {
    localStorage.setItem(LANG_KEY, lang);
    document.documentElement.lang = lang;
    document.title = t.ui.pageTitle.replace(/^\S+\s/, '');
  }, [lang, t]);

  useEffect(() => {
    localStorage.setItem(UNIT_KEY, unit);
  }, [unit]);

  useEffect(() => {
    localStorage.setItem(THEME_KEY, theme);
    const apply = () => {
      const effective = theme === 'auto'
        ? (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light')
        : theme;
      document.documentElement.dataset.theme = effective;
    };
    apply();
    if (theme !== 'auto') return;
    const mq = window.matchMedia('(prefers-color-scheme: dark)');
    mq.addEventListener('change', apply);
    return () => mq.removeEventListener('change', apply);
  }, [theme]);

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
  useEffect(() => {
    if (!GRAIN_RECIPES[grainId]) setGrainId(GRAIN_IDS[0]);
  }, [grainId]);
  useEffect(() => {
    if (!SPECIES[speciesId]) setSpeciesId(SPECIES_IDS[0]);
  }, [speciesId]);
  useEffect(() => {
    if (!SPECIES[conditionsSpeciesId]) setConditionsSpeciesId(SPECIES_IDS[0]);
  }, [conditionsSpeciesId]);
  useEffect(() => {
    if (!SPECIES[yieldSpeciesId]) setYieldSpeciesId(SPECIES_IDS[0]);
  }, [yieldSpeciesId]);
  useEffect(() => {
    if (!SPECIES[dryingSpeciesId]) setDryingSpeciesId(SPECIES_IDS[0]);
  }, [dryingSpeciesId]);

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

  const grainTotalVolume = useMemo(() => {
    const jarVolNum = parseFloat(grainJarVol);
    const jarCountNum = parseFloat(grainJarCount);
    if (!jarVolNum || jarVolNum <= 0 || !jarCountNum || jarCountNum <= 0) return null;
    return jarVolNum * jarCountNum;
  }, [grainJarVol, grainJarCount]);

  const grainResult = useMemo(() => {
    if (grainTotalVolume === null) return null;
    return GRAIN_RECIPES[grainId].calc(grainTotalVolume);
  }, [grainId, grainTotalVolume]);

  return (
    <div className="wrap">
      <header>
        <h1 id="pageTitle">{t.ui.pageTitle}</h1>
        <p id="pageSubtitle">{t.ui.pageSubtitle}</p>
        <div className="header-controls">
          <LanguageSwitch lang={lang} onChange={setLang} label={t.ui.langLabel} />
          <UnitSwitch unit={unit} onChange={setUnit} label={t.ui.unitLabel} />
          <ThemeSwitch
            theme={theme}
            onChange={setTheme}
            label={t.ui.themeLabel}
            options={{ auto: t.ui.themeAuto, light: t.ui.themeLight, dark: t.ui.themeDark }}
          />
        </div>
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
        unit={unit}
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
        unit={unit}
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
        unit={unit}
      />

      <GrainTab
        active={activeTab === 'grain'}
        ui={t.ui}
        texts={t.grain}
        grainId={grainId}
        setGrainId={setGrainId}
        jarVol={grainJarVol}
        setJarVol={setGrainJarVol}
        jarCount={grainJarCount}
        setJarCount={setGrainJarCount}
        result={grainResult}
        totalVolume={grainTotalVolume}
        unit={unit}
      />

      <SpeciesTab
        active={activeTab === 'species'}
        ui={t.ui}
        texts={t.species}
        substrateTexts={t.substrates}
        grainTexts={t.grain}
        speciesId={speciesId}
        setSpeciesId={setSpeciesId}
      />

      <ConditionsTab
        active={activeTab === 'conditions'}
        ui={t.ui}
        speciesTexts={t.species}
        speciesId={conditionsSpeciesId}
        setSpeciesId={setConditionsSpeciesId}
        temp={conditionsTemp}
        setTemp={setConditionsTemp}
        humidity={conditionsHumidity}
        setHumidity={setConditionsHumidity}
        fae={conditionsFae}
        setFae={setConditionsFae}
        light={conditionsLight}
        setLight={setConditionsLight}
      />

      <YieldTab
        active={activeTab === 'yield'}
        ui={t.ui}
        speciesTexts={t.species}
        substrateTexts={t.substrates}
        speciesId={yieldSpeciesId}
        setSpeciesId={setYieldSpeciesId}
        substrateId={yieldSubstrateId}
        setSubstrateId={setYieldSubstrateId}
        wetWeight={yieldWetWeight}
        setWetWeight={setYieldWetWeight}
        unit={unit}
      />

      <DryingTab
        active={activeTab === 'drying'}
        ui={t.ui}
        speciesTexts={t.species}
        speciesId={dryingSpeciesId}
        setSpeciesId={setDryingSpeciesId}
        thickness={dryingThickness}
        setThickness={setDryingThickness}
      />
    </div>
  );
}
