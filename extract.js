const meters = {
    "الطويل": {first: 8, second: 5, pattern: "فعولن مفاعيلن فعولن مفاعلن"},
    "المديد": {first: 6, second: 4, pattern: "فاعلاتن فاعلن فاعلاتن"},
    "البسيط": {first: 8, second: 5, pattern: "مستفعلن فاعلن مستفعلن فاعلن"},
    "الوافر": {first: 6, second: 4, pattern: "مفاعلتن مفاعلتن فعولن"},
    "الكامل": {first: 6, second: 4, pattern: "متفاعلن متفاعلن متفاعلن"},
    "الهزج": {first: 4, second: 2, pattern: "مفاعيلن مفاعيلن"},
    "الرجز": {first: 6, second: 4, pattern: "مستفعلن مستفعلن مستفعلن"},
    "الرمل": {first: 6, second: 4, pattern: "فاعلاتن فاعلاتن فاعلاتن"},
    "السريع": {first: 6, second: 4, pattern: "مستفعلن مستفعلن مفعولات"},
    "المنسرح": {first: 6, second: 4, pattern: "مستفعلن مفعولات مستفعلن"},
    "الخفيف": {first: 6, second: 4, pattern: "فاعلاتن مستفعلن فاعلاتن"},
    "المضارع": {first: 4, second: 2, pattern: "مفاعيلن فاعلاتن"},
    "المقتضب": {first: 4, second: 2, pattern: "مفعولات مستفعلن"},
    "المجتث": {first: 4, second: 2, pattern: "مستفعلن فاعلاتن"},
    "المتقارب": {first: 8, second: 5, pattern: "فعولن فعولن فعولن فعولن"},
    "المتدارك": {first: 8, second: 5, pattern: "فاعلن فاعلن فاعلن فاعلن"}
};

function calculateGoldenRatioProximity(first, second) {
    const ratio = first / second;
    const goldenRatio = 1.618033988749895;
    const difference = Math.abs(ratio - goldenRatio);
    return {
        ratio: ratio,
        accuracy: (1 - difference/goldenRatio) * 100
    };
}

const results = Object.entries(meters).map(([name, data]) => {
    const analysis = calculateGoldenRatioProximity(data.first, data.second);
    return {
        name,
        ratio: analysis.ratio,
        accuracy: analysis.accuracy,
        pattern: data.pattern
    };
});

results.sort((a, b) => b.accuracy - a.accuracy);

console.log("Golden Ratio Analysis of Classical Arabic Meters:\n");
results.forEach(result => {
    console.log(`${result.name}:`);
    console.log(`Ratio: ${result.ratio.toFixed(3)}`);
    console.log(`Golden Ratio Accuracy: ${result.accuracy.toFixed(2)}%\n`);
});

const avgAccuracy = results.reduce((sum, r) => sum + r.accuracy, 0) / results.length;
console.log(`Average accuracy across all meters: ${avgAccuracy.toFixed(2)}%`);

const topMeters = results.filter(r => r.accuracy > 95);
console.log(`\nNumber of meters with >95% golden ratio accuracy: ${topMeters.length}`);

