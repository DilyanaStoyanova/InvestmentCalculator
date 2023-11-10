import { calculateInvestmentResults, formatter } from "../util/investment.js";

export default function Results({ userInput }) {
    const resultData = calculateInvestmentResults(userInput);
    const initialInvestment = userInput.initialInvestment;

    return (
        <table id="result">
            <thead>
                <tr>
                    <th>Year</th>
                    <th>Investment Value</th>
                    <th>Interest (Year)</th>
                    <th>Total Interest</th>
                    <th>Invested Capital</th>
                </tr>
            </thead>
            <tbody>
                {resultData.map(annualData => {
                    const totalInterest = annualData.valueEndOfYear - initialInvestment - annualData.annualInvestment * annualData.year;
                    const investedCapital = initialInvestment + annualData.annualInvestment * annualData.year;
                    return (
                        <tr key={annualData.year}>
                            <td>{annualData.year}</td>
                            <td>{formatter.format(annualData.valueEndOfYear)}</td>
                            <td>{formatter.format(annualData.interest)}</td>
                            <td>{formatter.format(totalInterest)}</td>
                            <td>{formatter.format(investedCapital)}</td>
                        </tr>
                    );
                })}
            </tbody>
        </table>
    );
}