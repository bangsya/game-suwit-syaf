function getComp(){
    const comp = Math.random();

    if (comp < 0.35) return 'gajah';
    if (comp < 0.7) return 'orang';
    return 'semut';
}

function hasil(player, comp){
    if (player == comp) return 'SERI';
    if (player == 'gajah') return (comp == 'orang') ? 'MENANG' : 'KALAH';
    if (player == 'orang') return (comp == 'semut') ? 'MENANG' : 'KALAH';
    if (player == 'semut') return (comp == 'gajah') ? 'MENANG' : 'KALAH';
}


export {getComp, hasil};