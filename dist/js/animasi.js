function putar(){
    const tampilComp = document.querySelector('.comp img');
    const gambar = ['gajah', 'orang', 'semut'];
    let i = 0;
    const waktuMulai = new Date().getTime();
    setInterval(function(){
        if (new Date().getTime() - waktuMulai > 1000){
            clearInterval;
            return;
        }
        tampilComp.setAttribute('src', `dist/img/${gambar[i++]}.png`);
        if(i == gambar.length) i = 0;
    }, 100);
}

export { putar };