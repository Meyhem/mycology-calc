import { renderTemplate } from '../lib/format';

export default function StepsList({ cardId, headerId, header, listId, steps, totalVolume, result, hygieneId, hygiene, unit = 'metric' }) {
  return (
    <div className={'card' + (result ? '' : ' hidden')} id={cardId}>
      <h2 id={headerId}>{header}</h2>
      <ol className="steps" id={listId}>
        {result && steps.map((tpl, i) => (
          <li key={i}>{renderTemplate(tpl, totalVolume, result, unit)}</li>
        ))}
      </ol>
      <div className="badge" id={hygieneId}>{result ? '⚠ ' + hygiene : ''}</div>
    </div>
  );
}
