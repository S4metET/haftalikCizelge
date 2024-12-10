const haftalikcizelge = [];
const gunlukProgram = ["Pazartesi","Salı","Çarşamba","Perşembe","Cuma","Cumartesi","Pazar"];

for (let i = 0; i < gunlukProgram.length; i++) {
    const gun = gunlukProgram[i];
    const aktivite = prompt(`${gun} için aktiviteni yaz:`);
    haftalikcizelge.push({gun, aktivite});
}
console.log("Haftalık Çizelgen");
for (let i = 0; i < haftalikcizelge.length; i++) {
    console.log(`${haftalikcizelge[i].gun} = ${haftalikcizelge[i].aktivite}`);
}