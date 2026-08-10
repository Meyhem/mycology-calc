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
}) {
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
              <td className="num">{ing.volumeMl !== undefined ? fmtVol(ing.volumeMl) : '—'}</td>
              <td className="num">{ing.weightG !== undefined ? fmtWeight(ing.weightG) : '—'}</td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td id={totalLabelId}>{totalLabel}</td>
            <td className="num" id={totalVolId}>
              {result ? fmtVol(result.totalVolume) + (totalVolSuffix ? ` (${totalVolSuffix})` : '') : '—'}
            </td>
            <td className="num" id={totalWeightId}>{result ? fmtWeight(result.totalWeight) : ''}</td>
          </tr>
        </tfoot>
      </table>
      <div className="footnote" id={footnoteId}>{footnote}</div>
    </div>
  );
}
