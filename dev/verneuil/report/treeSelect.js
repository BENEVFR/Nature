const selectOptions = [
  {
    name: 'Bien-être',
    value: 'critere_bien_etre_global',
    children: [
      {
        name: 'Psychologique',
        value: 'critere_bien_etre_psy',
      },
      {
        name: 'Physique',
        value: 'critere_bien_etre_physique',
      },
      {
        name: 'Satisfaction lieu de vie',
        value: 'critere_bien_etre_environnement',
      },
      {
        name: 'Présence de ressources',
        value: 'critere_bien_etre_ressources',
      }
    ]
  },
  {
    name: 'Type de nature',
    value: 'critere_type_nature_global',
    children: [
      {
        name: 'Non domestiquée',
        value: 'critere_nature_nondomest',
      },
      {
        name: 'Domestiquée',
        value: 'critere_nature_domestique',
      },
      {
        name: 'De proximité',
        value: 'critere_nature_proximite',
      }
    ]
  },
  {
    name: 'Niveau de biodiversité perçue',
    value: 'critere_biodiv_global'
  },
  {
    name: "Fréquence d'exposition à la nature",
    value: 'critere_exposition_nature_global'
  },
  {
    name: "Fréquence d'activité dans la nature",
    value: 'critere_activ_global',
    children: [
      {
        name: 'Sociales et paisibles',
        value: 'critere_activ_social_calme',
      },
      {
        name: 'Sportives',
        value: 'critere_activ_sport',
      }
    ]
  },
  {
    name: "Caractéristiques de l'environnement",
    value: 'critere_caract_percues_global'
  },
  {
    name: "Ratio bien-être <> nature",
    value: 'critere_ratio_bien_etre_nature'
  }
]

document.addEventListener("DOMContentLoaded", function(event) {
  console.log("TreeSelect is Ready!");

  const domElement = document.querySelector('#treeselect-container')
  const treeSelect = new Treeselect({
    parentHtmlContainer: domElement,
    isSingleSelect: true,
    showTags: false,
    clearable: false,
    value: 'critere_bien_etre_global',
    options: selectOptions
  });

  treeSelect.srcElement.addEventListener('input', (e) => {
    console.log('Selected value:', e.detail)
    select_critere_change(e.detail)
  })
});
