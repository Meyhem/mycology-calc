import { starsText } from '../lib/format';

// Dropdown with star-annotated options, e.g. "★★★★★ CVG — Coco Coir / Vermiculite / Gypsum"
export default function RecipeSelect({ id, value, onChange, dataObj, i18nObj }) {
  return (
    <select id={id} value={value} onChange={(e) => onChange(e.target.value)}>
      {Object.entries(dataObj).map(([key, entry]) => (
        <option key={key} value={key}>
          {starsText(entry.stars)} {i18nObj[key].name}
        </option>
      ))}
    </select>
  );
}
