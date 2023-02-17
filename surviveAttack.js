function hasSurvived(attackers, defenders) {
  let atl = 0;
  let defl = 0;
  let atcount = 0,
    defcount = 0;
  if (attackers.length > defenders.length) {
    for (let i = 0; i < defenders.length; i++) {
      if (attackers[i] > defenders[i]) {
        atcount++;
      }
      if (attackers[i] < defenders[i]) {
        defcount++;
      }
      atl = atl + attackers[i];
      defl = defl + defenders[i];
    }
    if (defcount == atcount) {
      if (atl > defl) {
        return false;
      } else {
        return true;
      }
    } else {
      atcount > defcount ? true : false;
    }
  }
}

console.log(hasSurvived([2, 9, 9, 7], [1, 1, 3, 8]));
