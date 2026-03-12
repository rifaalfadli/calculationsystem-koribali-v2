import { FileSpreadsheet } from "lucide-react";

export function OverheadWireCalculationTable({ resultsOhw }) {
  return (
    <div className="mx-6 my-6 mb-16 space-y-6 hp:mx-2 hp:mt-4 hp:mb-8">
      <div className="bg-gradient-to-r from-[#0d3b66] to-[#0d3b66] px-5 py-4 shadow-sm hp:px-4 hp:py-3">
        <div className="flex items-center gap-3 hp:gap-2">
          <div className="bg-white/15 backdrop-blur-sm p-2 rounded-lg hp:p-1.5">
            <FileSpreadsheet className="w-4 h-4 text-white" />
          </div>
          <div>
            <h3 className="text-white font-semibold text-sm leading-tight hp:text-xs">
              Overhead Wire Calculation
            </h3>
          </div>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-blue-50 text-[#0d3b66] text-xs hp:text-[10px]">
              <th className="px-3 py-2 border border-gray-300 text-center font-semibold hp:font-medium">
                OHW
              </th>

              <th className="px-3 py-2 border border-gray-300 text-center font-semibold hp:font-medium">
                Description
              </th>

              <th className="px-3 py-2 border border-gray-300 text-center leading-tight">
                <div className="font-semibold hp:font-medium">Diameter</div>
                <div className="text-[13px] pt-[4px] text-gray-500 hp:text-[10px]">
                  (mm)
                </div>
              </th>

              <th className="px-3 py-2 border border-gray-300 text-center leading-tight">
                <div className="font-semibold hp:font-medium">Span</div>
                <div className="text-[13px] pt-[4px] text-gray-500 hp:text-[10px]">
                  (m)
                </div>
              </th>

              <th className="px-3 py-2 border border-gray-300 text-center leading-tight">
                <div className="font-semibold hp:font-medium">
                  Sagging Ratio
                </div>
                <div className="text-[13px] pt-[4px] text-gray-500 hp:text-[10px]">
                  (%)
                </div>
              </th>

              <th className="px-3 py-2 border border-gray-300 text-center leading-tight">
                <div className="font-semibold hp:font-medium">Weight</div>
                <div className="text-[13px] pt-[4px] text-gray-500 hp:text-[10px]">
                  (kg/m)
                </div>
              </th>

              <th className="px-3 py-2 border border-gray-300 text-center leading-tight">
                <div className="font-semibold hp:font-medium">FL</div>
                <div className="text-[13px] pt-[4px] text-gray-500 hp:text-[10px]">
                  (kg)
                </div>
              </th>

              <th className="px-3 py-2 border border-gray-300 text-center leading-tight">
                <div className="font-semibold hp:font-medium">FL</div>
                <div className="text-[13px] pt-[4px] text-gray-500 hp:text-[10px]">
                  (N)
                </div>
              </th>

              <th className="px-3 py-2 border border-gray-300 text-center leading-tight">
                <div className="font-semibold whitespace-nowrap hp:font-medium">
                  Area
                </div>
                <div className="text-[13px] pt-[4px] text-gray-500 whitespace-nowrap hp:text-[10px]">
                  (m<sup>2</sup>)
                </div>
              </th>

              <th className="px-3 py-2 border border-gray-300 text-center font-semibold hp:font-medium">
                Cf
              </th>

              <th className="px-3 py-2 border border-gray-300 text-center leading-tight">
                <div className="font-semibold hp:font-medium">Height (Z)</div>
                <div className="text-[13px] pt-[4px] text-gray-500 hp:text-[10px]">
                  (mm)
                </div>
              </th>
            </tr>
          </thead>

          <tbody>
            {resultsOhw.map((r, i) => (
              <tr
                key={i}
                className="hover:bg-[#3399cc]/10 transition-colors text-xs hp:text-[10px]"
              >
                <td className="px-4 py-3 border border-gray-300 text-gray-700 text-center hp:px-3 hp:py-2">
                  {r.ohwNum}
                </td>

                <td className="px-4 py-3 border border-gray-300 text-gray-700 text-center hp:px-3 hp:py-2">
                  {r.nameOhw}
                </td>

                <td className="px-4 py-3 border border-gray-300 text-gray-700 text-center hp:px-3 hp:py-2">
                  {r.diameterOhw}
                </td>

                <td className="px-4 py-3 border border-gray-300 text-gray-700 text-center hp:px-3 hp:py-2">
                  {r.spanOhw}
                </td>

                <td className="px-4 py-3 border border-gray-300 text-gray-700 text-center hp:px-3 hp:py-2">
                  {r.saggingOhw}
                </td>

                <td className="px-4 py-3 border border-gray-300 text-gray-700 text-center hp:px-3 hp:py-2">
                  {r.weightOhw}
                </td>

                <td className="px-4 py-3 border border-gray-300 text-gray-700 text-center hp:px-3 hp:py-2">
                  {r.flOhwKg}
                </td>

                <td className="px-4 py-3 border border-gray-300 text-gray-700 text-center hp:px-3 hp:py-2">
                  {r.flOhwN}
                </td>

                <td className="px-4 py-3 border border-gray-300 text-gray-700 text-center hp:px-3 hp:py-2">
                  {r.AreaOhw}
                </td>

                <td className="px-4 py-3 border border-gray-300 text-gray-700 text-center hp:px-3 hp:py-2">
                  {r.cfOhw}
                </td>

                <td className="px-4 py-3 border border-gray-300 text-gray-700 text-center hp:px-3 hp:py-2">
                  {r.fixheightOhw}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-blue-50 text-[#0d3b66] text-xs hp:text-[10px]">
              <th className="px-3 py-2 border border-gray-300 text-center leading-tight">
                <div className="font-semibold hp:font-medium">Wind Load</div>
                <div className="text-[13px] pt-[4px] text-gray-500 hp:text-[10px]">
                  (N)
                </div>
              </th>

              <th className="px-3 py-2 border border-gray-300 text-center font-semibold hp:font-medium">
                Fix Angle
              </th>

              <th className="px-3 py-2 border border-gray-300 text-center leading-tight">
                <div className="font-semibold hp:font-medium">Seismic Load</div>
                <div className="text-[13px] pt-[4px] text-gray-500 hp:text-[10px]">
                  (N)
                </div>
              </th>

              <th className="px-3 py-2 border border-gray-300 text-center font-semibold hp:font-medium">
                Pw_Fix
              </th>

              <th className="px-3 py-2 border border-gray-300 text-center font-semibold hp:font-medium">
                Pw_Straight
              </th>

              <th className="px-3 py-2 border border-gray-300 text-center font-semibold hp:font-medium">
                Pw_Oblique
              </th>

              <th className="px-3 py-2 border border-gray-300 text-center leading-tight">
                <div className="font-semibold hp:font-medium">Tension Fix</div>
                <div className="text-[13px] pt-[4px] text-gray-500 hp:text-[10px]">
                  (N)
                </div>
              </th>

              <th className="px-3 py-2 border border-gray-300 text-center leading-tight">
                <div className="font-semibold hp:font-medium">
                  Tension Straight
                </div>
                <div className="text-[13px] pt-[4px] text-gray-500 hp:text-[10px]">
                  (N)
                </div>
              </th>

              <th className="px-3 py-2 border border-gray-300 text-center leading-tight">
                <div className="font-semibold hp:font-medium">
                  Tension Oblique
                </div>
                <div className="text-[13px] pt-[4px] text-gray-500 hp:text-[10px]">
                  (N)
                </div>
              </th>

              <th className="px-3 py-2 border border-gray-300 text-center leading-tight">
                <div className="font-semibold hp:font-medium">
                  Vertical Angle
                </div>
                <div className="text-[13px] pt-[4px] text-gray-500 hp:text-[10px]">
                  (deg)
                </div>
              </th>

              <th className="px-3 py-2 border border-gray-300 text-center font-semibold hp:font-medium">
                Cos Vertical Angle
              </th>
            </tr>
          </thead>

          <tbody>
            {resultsOhw.map((r, i) => (
              <tr
                key={i}
                className="hover:bg-[#3399cc]/10 transition-colors text-xs hp:text-[10px]"
              >
                <td className="px-4 py-3 border border-gray-300 text-gray-700 text-center hp:px-3 hp:py-2">
                  {r.wlOhw}
                </td>

                <td className="px-4 py-3 border border-gray-300 text-gray-700 text-center hp:px-3 hp:py-2">
                  {r.fixAngleOhw}
                </td>

                <td className="px-4 py-3 border border-gray-300 text-gray-700 text-center hp:px-3 hp:py-2">
                  {r.slOhw}
                </td>

                <td className="px-4 py-3 border border-gray-300 text-gray-700 text-center hp:px-3 hp:py-2">
                  {r.pwFixOhw}
                </td>

                <td className="px-4 py-3 border border-gray-300 text-gray-700 text-center hp:px-3 hp:py-2">
                  {r.pwStraightOhw}
                </td>

                <td className="px-4 py-3 border border-gray-300 text-gray-700 text-center hp:px-3 hp:py-2">
                  {r.pwObliqueOhw}
                </td>

                <td className="px-4 py-3 border border-gray-300 text-gray-700 text-center hp:px-3 hp:py-2">
                  {r.tensionFixOhw}
                </td>

                <td className="px-4 py-3 border border-gray-300 text-gray-700 text-center hp:px-3 hp:py-2">
                  {r.tensionStraightOhw}
                </td>

                <td className="px-4 py-3 border border-gray-300 text-gray-700 text-center hp:px-3 hp:py-2">
                  {r.tensionObliqueOhw}
                </td>

                <td className="px-4 py-3 border border-gray-300 text-gray-700 text-center hp:px-3 hp:py-2">
                  {r.verticalAngleOhw}
                </td>

                <td className="px-4 py-3 border border-gray-300 text-gray-700 text-center hp:px-3 hp:py-2">
                  {r.cosVerticalAngleOhw}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
