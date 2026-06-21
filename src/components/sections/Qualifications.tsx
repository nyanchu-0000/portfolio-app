import React from "react";
import Section from "../common/Section";
import { qualifications, otherQualifications } from "../../data/qualifications";

const QualificationTable: React.FC<{ data: typeof qualifications }> = ({ data }) => (
    <div className="bg-cream-50 border border-sand-200 rounded-lg overflow-hidden">
        <table className="w-full table-fixed">
            <colgroup>
                <col style={{ width: "50%" }} />
                <col style={{ width: "35%" }} />
                <col style={{ width: "15%" }} />
            </colgroup>
            <thead>
                <tr className="bg-sand-100 border-b border-sand-200">
                    <th className="text-left py-4 px-6 text-brown-900 font-semibold">
                        資格名
                    </th>
                    <th className="text-left py-4 px-6 text-brown-900 font-semibold">
                        発行機関
                    </th>
                    <th className="text-left py-4 px-6 text-brown-900 font-semibold">
                        取得日
                    </th>
                </tr>
            </thead>
            <tbody>
                {data.map((qual) => (
                    <tr
                        key={qual.id}
                        className="border-b border-sand-200 last:border-b-0"
                    >
                        <td className="py-4 px-6 text-brown-900 font-medium">
                            {qual.name}
                        </td>
                        <td className="py-4 px-6 text-brown-600">
                            {qual.issuer}
                        </td>
                        <td className="py-4 px-6 text-brown-500">
                            {qual.date}
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
);

const Qualifications: React.FC = () => {
    return (
        <Section id="qualifications" title="QUALIFICATIONS" className="bg-cream-100/80">
            <div className="max-w-5xl mx-auto space-y-12">
                <QualificationTable data={qualifications} />

                <div>
                    <h3 className="text-xl font-bold text-brown-900 mb-6 tracking-wide">
                        Other
                    </h3>
                    <QualificationTable data={otherQualifications} />
                </div>
            </div>
        </Section>
    );
};

export default Qualifications;
