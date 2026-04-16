document.querySelector("#Grise").addEventListener("click", infoGrise);

function infoGrise() {
  console.log("infoGrise");
  document.querySelector(".info-text h2").textContent = "Animalsk landbrug";
  document.querySelector(".info-text p").textContent =
    "Store mængder husdyr påvirker vores drikkevand";
  document.querySelector("#facts").innerHTML =
    "<h3>Fakta</h3><ul><li>Danmark har over 30 millioner svin årligt</li><li>Husdyr producerer store mængder gylle</li><li>Gylle indeholder kvælstof og bakterier</li><li>Kvælstof kan sive ned i grundvandet som nitrat</li><li>Højt nitratindhold kan gøre drikkevand sundhedsskadeligt</li></ul>";
  document.querySelector("#forklaring").innerHTML =
    "<h3>Forklaring</h3><p>Animalsk landbrug producerer store mængder gylle, som enten udspredes på marker eller siver ned i jorden fra stalde og udearealer. Når jorden ikke kan optage al næringen, omdannes kvælstof til nitrat, som kan nå grundvandet. Nitrat i drikkevand er problematisk, fordi det i kroppen kan omdannes til stoffer, der påvirker blodets evne til at transportere ilt - især hos spædbørn - og er også forbundet med øget risiko for visse sygdomme. I Danmark, hvor næsten alt drikkevand kommer fra grundvand, gør det forureningen til et direkte problem for vores sundhed. </p>";
}

document
  .querySelector("#pesticider_info")
  .addEventListener("click", infoPesticider);

function infoPesticider() {
  console.log("infoPesticider");
  document.querySelector(".info-text h2").textContent = "Pesticider";
  document.querySelector(".info-text p").textContent =
    "Sprøjtemidler kan ende i vores drikkevand";
  document.querySelector("#facts").innerHTML =
    "<h3>Fakta</h3><ul><li>Pesticider og sprøjtemidler bruges i størstedelen af dansk landbrug</li><li>Ca. 80 % af dansk landbrugsareal bruges til foder til animalsk produktion</li><li>Sprøjtemidler kan sive ned gennem jorden til grundvandet</li><li>Pesticidrester er fundet i mange danske drikkevandsboringer</li><li>Nogle fundne stoffer er forbudte, men findes stadig i grundvandet</li></ul>";
  document.querySelector("#forklaring").innerHTML =
    "<h3>Forklaring</h3><p>En stor del af det danske landbrug bruges til at dyrke foder til husdyr, og her anvendes pesticider til at beskytte afgrøderne. Disse sprøjtemidler kan sive ned gennem jorden og ende i grundvandet. Flere af stofferne nedbrydes meget langsomt og kan derfor findes i drikkevandet mange år efter, de er brugt - også selvom de i dag er forbudte. Da nogle pesticider er mistænkt for at være hormonforstyrrende eller kræftfremkaldende, er selv små mængder problematiske. Når forureningen først er nået ned i grundvandet, er den meget svær at fjerne og kan påvirke drikkevandet i årtier.</p>";
}

document.querySelector("#vand_info").addEventListener("click", infoVand);

function infoVand() {
  console.log("infoVand");
  document.querySelector(".info-text h2").textContent = "Dit drikkevand";
  document.querySelector(".info-text p").textContent =
    "Sprøjtemidler kan ende i vores drikkevand";
  document.querySelector("#facts").innerHTML =
    "<h3>Fakta</h3><ul><li>Næsten 100 % af dansk drikkevand kommer fra grundvand</li><li>Forurening kan ende direkte i det vand, vi drikker</li><li>Ofte opdages forurening først, når den er nået drikkevandet</li><li>Nogle stoffer kan blive i vandet i årtier</li><li>Det kan få betydning for vores sundhed og fremtidige adgang til rent vand</li></ul>";
  document.querySelector("#forklaring").innerHTML =
    "<h3>Forklaring</h3><p>I Danmark drikker vi grundvand, som næsten ikke bliver renset, før det kommer ud af hanen. Det betyder, at forurening fra for eksempel landbrug i sidste ende kan ende i det vand, vi selv drikker. En særlig udfordring er, at forureningen ofte først opdages, når den allerede har nået drikkevandet. Samtidig kan stoffer som pesticider og nitrat blive i grundvandet i årtier. Det gør forurening svær at håndtere og betyder, at den kan få langvarige konsekvenser - både for vores sundhed og for adgangen til rent drikkevand i fremtiden.</p>";
}
