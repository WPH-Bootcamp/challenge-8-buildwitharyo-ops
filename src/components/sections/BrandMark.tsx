import {
  siPostman,
  siDatabricks,
  siAirbnb,
  siDropbox,
  siPaypal,
} from "simple-icons";

// Adobe removed from simple-icons due to brand guidelines — using the original path
const ADOBE_PATH =
  "M13.966 22.624l-1.69-4.281H8.122l3.892-9.144 5.662 13.425zM8.884 1.376H0v21.248zM24 22.624L15.116 1.376v21.248z";

// brands whose "icon" in simple-icons IS basically the wordmark itself —
// rendering icon + text would visually duplicate the brand name (e.g. "Up upwork")
// so these render text-only

interface Brand {
  label: string;
  iconPath?: string;
}

const brands: Record<string, Brand> = {
  adobe: { label: "Adobe", iconPath: ADOBE_PATH },
  upwork: { label: "upwork" },
  zoom: { label: "zoom" },
  postman: { label: "POSTMAN", iconPath: siPostman.path },
  databricks: { label: "databricks", iconPath: siDatabricks.path },
  airbnb: { label: "airbnb", iconPath: siAirbnb.path },
  dropbox: { label: "Dropbox", iconPath: siDropbox.path },
  paypal: { label: "PayPal", iconPath: siPaypal.path },
  netflix: { label: "NETFLIX" },
};

interface Props {
  slug: string;
}

export function BrandMark({ slug }: Props) {
  const brand = brands[slug];
  if (!brand) return null;

  return (
    <span className="flex items-center gap-2.5 shrink-0 text-ink-400 dark:text-white/40">
      {brand.iconPath && (
        <svg
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden
        >
          <path d={brand.iconPath} />
        </svg>
      )}
      <span className="text-2xl md:text-3xl font-bold tracking-tight">
        {brand.label}
      </span>
    </span>
  );
}
