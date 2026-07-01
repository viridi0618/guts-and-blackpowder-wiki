import { Metadata } from 'next';
import SectionTitle from '@/components/SectionTitle';
import { regions } from '@/lib/data';

export const metadata: Metadata = {
  title: '地图攻略',
  description: 'Guts and Blackpowder 经典地图详尽指南',
};

export default function RegionsPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-16">
      {/* Hero Banner */}
      <section className="mb-20">
        <SectionTitle
          tag="Maps"
          title="地图攻略"
          subtitle="Guts and Blackpowder 经典地图详尽指南，了解每张地图的特色与战术要点"
        />
      </section>

      {/* Regions */}
      {regions.map((region, i) => (
        <section key={region.id} className={i > 0 ? 'mt-20' : ''}>
          {/* Region Header */}
          <div className="mb-8">
            <div className="flex flex-wrap items-center gap-4 mb-4">
              <h2 className="font-serif text-3xl md:text-4xl text-foreground">
                {region.name}
              </h2>
              <span className="inline-block font-sans text-xs font-medium uppercase tracking-wider px-3 py-1 rounded-full bg-gold text-background">
                {region.tag}
              </span>
              <span className="font-sans text-sm" style={{ color: '#8a8884' }}>
                {region.levelRange}
              </span>
            </div>
            <p
              className="font-sans text-base leading-relaxed max-w-3xl"
              style={{ color: '#8a8884' }}
            >
              {region.description}
            </p>
          </div>

          {/* Features Section with Gold Left Border */}
          <div
            className="mb-10 p-6 rounded-lg"
            style={{
              backgroundColor: 'rgba(255,255,255,0.03)',
              border: '1px solid #2a2826',
              borderLeft: '3px solid #d4af6a',
            }}
          >
            <h3 className="font-serif text-xl text-foreground mb-4">地图特色</h3>
            <ul className="space-y-3">
              {region.features.map((feature, j) => (
                <li
                  key={j}
                  className="flex items-start gap-3 font-sans text-sm text-foreground"
                >
                  <svg
                    className="w-5 h-5 mt-0.5 shrink-0 text-gold"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          {/* Points of Interest */}
          <div>
            <h3 className="font-serif text-xl text-foreground mb-4">战术要点</h3>
            <div className="grid gap-4 md:grid-cols-2">
              {region.pointsOfInterest.map((poi, j) => {
                // Split POI string into title and description
                const [poiTitle, ...poiDescParts] = poi.split(' — ');
                const poiDesc = poiDescParts.join(' — ');
                return (
                  <div
                    key={j}
                    className="p-5 rounded-lg transition-all duration-300 bg-card-bg border border-border border-l-[3px] border-l-gold hover:bg-card-hover hover:border-gold hover:-translate-y-0.5"
                  >
                    <p className="font-serif text-base font-medium text-gold mb-1">
                      {poiTitle}
                    </p>
                    {poiDesc && (
                      <p className="font-sans text-sm leading-relaxed" style={{ color: '#8a8884' }}>
                        {poiDesc}
                      </p>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      ))}
    </div>
  );
}
