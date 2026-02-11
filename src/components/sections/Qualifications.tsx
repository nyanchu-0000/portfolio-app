import React from "react";
import Section from "../common/Section";
import { qualifications } from "../../data/qualifications";

const Qualifications: React.FC = () => {
    return (
        <Section id="qualifications" title="QUALIFICATIONS" className="bg-cream-100">
            <div className="max-w-5xl mx-auto">
                <div className="bg-cream-50 border border-sand-200 rounded-lg overflow-hidden">
                    <table className="w-full">
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
                            {qualifications.map((qual) => (
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
            </div>
        </Section>
    );
};

export default Qualifications;
