import type { Metadata } from "next";
import SectionTitle from "@/components/SectionTitle";
import { weaponTypes, classWeaponMap, recommendedWeapons } from "@/lib/data";

export const metadata: Metadata = {
  title: "Weapons Guide",
  description: "Guts and Blackpowder comprehensive weapons guide — muskets, rifles, sabres, pistols, and more",
};

export default function WeaponsPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Banner */}
      <section className="relative flex items-center justify-center py-24 md:py-32 overflow-hidden">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            background:
              "radial-gradient(ellipse at 50% 50%, #d4af6a 0%, transparent 70%)",
          }}
        />
        <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
          <h1
            className="font-serif text-4xl md:text-5xl lg:text-6xl leading-tight mb-4"
            style={{ color: "#f0ece4" }}
          >
            Weapons Guide
          </h1>
          <p
            className="text-lg md:text-xl max-w-2xl mx-auto leading-relaxed"
            style={{ color: "#8a8884" }}
          >
            Guts and Blackpowder features a wide array of historically inspired weapons. Your weapon choice defines your combat style and effectiveness on the battlefield. Master the muzzle-loaders, sabres, and specialized tools of the Napoleonic era.
          </p>
        </div>
      </section>

      {/* Weapon System Introduction */}
      <section className="py-16" style={{ backgroundColor: "#05030c" }}>
        <div className="max-w-5xl mx-auto px-4">
          <SectionTitle
            title="Weapon System Overview"
            subtitle="Historical firearms and melee weapons are the core of Guts and Blackpowder's combat system"
            align="center"
          />

          <div className="mt-10 max-w-3xl mx-auto">
            <p
              className="text-base leading-relaxed mb-4"
              style={{ color: "#8a8884" }}
            >
              Weapons in Guts and Blackpowder are faithfully based on real Napoleonic-era equipment. From muzzle-loading smoothbore muskets to officer sabres, each weapon has unique reload speed, damage, and range characteristics. Choosing the right weapon maximizes your combat effectiveness.
            </p>
            <p
              className="text-base leading-relaxed"
              style={{ color: "#8a8884" }}
            >
              Different classes have access to different weapons. Infantry use standard muskets, while the Officer wields a sabre and bugle. It is recommended to experiment with different loadouts to find what suits your playstyle best.
            </p>
          </div>
        </div>
      </section>

      {/* Weapon Types Table */}
      <section
        className="py-16"
        style={{ backgroundColor: "rgba(255,255,255,0.01)" }}
      >
        <div className="max-w-5xl mx-auto px-4">
          <SectionTitle
            title="Weapon Types"
            subtitle="All weapon categories and their applicable modes"
            align="center"
          />

          <div className="mt-10 overflow-x-auto">
            <table
              className="w-full border-collapse rounded-lg overflow-hidden"
              style={{ backgroundColor: "rgba(255,255,255,0.03)" }}
            >
              <thead>
                <tr style={{ backgroundColor: "#d4af6a" }}>
                  <th
                    className="px-6 py-4 text-left font-semibold text-sm uppercase tracking-wider"
                    style={{ color: "#05030c" }}
                  >
                    Weapon Name
                  </th>
                  <th
                    className="px-6 py-4 text-left font-semibold text-sm uppercase tracking-wider"
                    style={{ color: "#05030c" }}
                  >
                    Description
                  </th>
                  <th
                    className="px-6 py-4 text-left font-semibold text-sm uppercase tracking-wider"
                    style={{ color: "#05030c" }}
                  >
                    Available Modes
                  </th>
                </tr>
              </thead>
              <tbody>
                {weaponTypes.map((weapon, index) => (
                  <tr
                    key={weapon.name}
                    className="transition-colors"
                    style={{
                      backgroundColor:
                        index % 2 === 0
                          ? "rgba(255,255,255,0.03)"
                          : "rgba(255,255,255,0.06)",
                      borderBottom: "1px solid #2a2826",
                    }}
                  >
                    <td
                      className="px-6 py-4 font-medium whitespace-nowrap"
                      style={{ color: "#f0ece4" }}
                    >
                      {weapon.name}
                    </td>
                    <td className="px-6 py-4" style={{ color: "#8a8884" }}>
                      {weapon.description}
                    </td>
                    <td className="px-6 py-4" style={{ color: "#8a8884" }}>
                      <div className="flex flex-wrap gap-2">
                        {weapon.classes.map((cls) => (
                          <span
                            key={cls}
                            className="inline-block text-xs px-2 py-0.5 rounded"
                            style={{
                              backgroundColor: "rgba(212,175,106,0.15)",
                              color: "#d4af6a",
                              border: "1px solid rgba(212,175,106,0.3)",
                            }}
                          >
                            {cls}
                          </span>
                        ))}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Mode-Weapon Compatibility */}
      <section className="py-16" style={{ backgroundColor: "#05030c" }}>
        <div className="max-w-5xl mx-auto px-4">
          <SectionTitle
            title="Class-Weapon Compatibility"
            subtitle="Which weapons are available for each class"
            align="center"
          />

          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
            {classWeaponMap.map((entry) => (
              <div
                key={entry.class}
                className="rounded-lg p-6"
                style={{
                  backgroundColor: "rgba(255,255,255,0.03)",
                  border: "1px solid #2a2826",
                }}
              >
                <h3
                  className="font-serif text-xl mb-3"
                  style={{ color: "#f0ece4" }}
                >
                  {entry.class}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {entry.weapons.map((weapon) => (
                    <span
                      key={weapon}
                      className="inline-block text-sm px-3 py-1 rounded"
                      style={{
                        backgroundColor: "rgba(212,175,106,0.1)",
                        color: "#e8d5a3",
                        border: "1px solid rgba(212,175,106,0.25)",
                      }}
                    >
                      {weapon}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recommended Weapons */}
      <section
        className="py-16"
        style={{ backgroundColor: "rgba(255,255,255,0.01)" }}
      >
        <div className="max-w-5xl mx-auto px-4">
          <SectionTitle
            title="Recommended Weapons"
            subtitle="Top weapon picks for the current meta"
            align="center"
          />

          <div className="mt-10 overflow-x-auto">
            <table
              className="w-full border-collapse rounded-lg overflow-hidden"
              style={{ backgroundColor: "rgba(255,255,255,0.03)" }}
            >
              <thead>
                <tr style={{ backgroundColor: "#d4af6a" }}>
                  {[
                    "Weapon Name",
                    "Type",
                    "Class",
                    "DMG",
                    "SPD",
                    "Range",
                    "Notes",
                  ].map((header) => (
                    <th
                      key={header}
                      className="px-4 py-4 text-left font-semibold text-sm uppercase tracking-wider whitespace-nowrap"
                      style={{ color: "#05030c" }}
                    >
                      {header}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {recommendedWeapons.map((weapon, index) => (
                  <tr
                    key={weapon.name}
                    className="transition-colors"
                    style={{
                      backgroundColor:
                        index % 2 === 0
                          ? "rgba(255,255,255,0.03)"
                          : "rgba(255,255,255,0.06)",
                      borderBottom: "1px solid #2a2826",
                    }}
                  >
                    <td
                      className="px-4 py-4 font-medium whitespace-nowrap"
                      style={{ color: "#f0ece4" }}
                    >
                      {weapon.name}
                    </td>
                    <td className="px-4 py-4 whitespace-nowrap" style={{ color: "#8a8884" }}>
                      {weapon.type}
                    </td>
                    <td className="px-4 py-4 whitespace-nowrap" style={{ color: "#d4af6a" }}>
                      {weapon.class}
                    </td>
                    <td
                      className="px-4 py-4 text-center font-mono"
                      style={{
                        color:
                          weapon.damage === "S"
                            ? "#d4af6a"
                            : weapon.damage === "A"
                              ? "#5ee2d8"
                              : "#8a8884",
                      }}
                    >
                      {weapon.damage}
                    </td>
                    <td
                      className="px-4 py-4 text-center font-mono"
                      style={{
                        color:
                          weapon.speed === "S"
                            ? "#d4af6a"
                            : weapon.speed === "A"
                              ? "#5ee2d8"
                              : "#8a8884",
                      }}
                    >
                      {weapon.speed}
                    </td>
                    <td className="px-4 py-4 text-center" style={{ color: "#8a8884" }}>
                      {weapon.range}
                    </td>
                    <td className="px-4 py-4 text-sm" style={{ color: "#8a8884" }}>
                      {weapon.description}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

    </div>
  );
}
