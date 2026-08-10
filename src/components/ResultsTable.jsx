import { useState } from 'react';
import { fmtVol, fmtWeight } from '../lib/format';

export default function ResultsTable({
  cardId,
  headerId,
  header,
  ingColId,
  volColId,
  wtColId,
  ingCol,
  volCol,
  wtCol,
  rowsBodyId,
  names,
  result,
  totalLabelId,
  totalLabel,
  totalVolId,
  totalWeightId,
  totalVolSuffix,
  footnoteId,
  footnote,
  unit = 'metric',
  copyLabel,
  copiedLabel,
}) {
  const [copied, setCopied] = useState(false);

  function handleCopy() {
    if (!result) return;
    const lines = result.ingredients.map((ing, i) => {
      const parts = [];
      if (ing.volumeMl !== undefined) parts.push(fmtVol(ing.volumeMl, unit));
      if (ing.weightG !== undefined) parts.push(fmtWeight(ing.weightG, unit));
      return `- ${names[i]}: ${parts.join(' / ')}`;
    });
    const text = [header, ...lines, `${totalLabel}: ${fmtVol(result.totalVolume, unit)}, ${fmtWeight(result.totalWeight, unit)}`].join('\n');
    navigator.clipboard?.writeText(text).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  }

  return (
    <div className={'card' + (result ? '' : ' hidden')} id={cardId}>
      <h2 id={headerId}>{header}</h2>
      <table>
        <thead>
          <tr>
            <th id={ingColId}>{ingCol}</th>
            <th className="num" id={volColId}>{volCol}</th>
            <th className="num" id={wtColId}>{wtCol}</th>
          </tr>
        </thead>
        <tbody id={rowsBodyId}>
          {result && result.ingredients.map((ing, i) => (
            <tr key={i}>
              <td>{names[i]}</td>
              <td className="num">{ing.volumeMl !== undefined ? fmtVol(ing.volumeMl, unit) : '—'}</td>
              <td className="num">{ing.weightG !== undefined ? fmtWeight(ing.weightG, unit) : '—'}</td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td id={totalLabelId}>{totalLabel}</td>
            <td className="num" id={totalVolId}>
              {result ? fmtVol(result.totalVolume, unit) + (totalVolSuffix ? ` (${totalVolSuffix})` : '') : '—'}
            </td>
            <td className="num" id={totalWeightId}>{result ? fmtWeight(result.totalWeight, unit) : ''}</td>
          </tr>
        </tfoot>
      </table>
      <div className="footnote" id={footnoteId}>{footnote}</div>
      {result && (
        <button className="copy-btn" type="button" onClick={handleCopy}>
          {copied ? copiedLabel : copyLabel}
        </button>
      )}
    </div>
  );
}
