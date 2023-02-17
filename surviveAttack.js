function hasSurvived(attackers, defenders) {
  let atl = attackers.length;
  let defl = defenders.length;
  let attckforce = 0,
    defforce = 0;
  let atcount = 0,
    defcount = 0;
  if (atl > defl) {
    for (let i = defl + 1; i > atl; i++) {
      defl.push(0);
    }
  }
  if (defl == 0 && atl > 0) {
    return false;
  }
  if (defl > 0 && atl == 0) {
    return true;
  }
  if (attackers.length >= defenders.length) {
    for (let i = 0; i < defenders.length; i++) {
      if (attackers[i] > defenders[i]) {
        atcount++;
      }
      if (attackers[i] < defenders[i]) {
        defcount++;
      }
      attckforce = attckforce + attackers[i];
      defforce = defforce + defenders[i];
    }
    if (defcount == atcount) {
      if (attckforce > defforce) {
        return false;
      } else {
        return true;
      }
    } else {
      return atcount > defcount ? false : true;
    }
  } else {
    if (defcount > atcount) {
      return true;
    } else {
      return atcount > defcount
        ? false
        :true;
    }
  }
}

