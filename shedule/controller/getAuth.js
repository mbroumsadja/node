// import Universites from '../models/utilisateurs/Universites.js';
// import Facultes from '../models/utilisateurs/Facultes.js';
// import Departements from '../models/utilisateurs/Departements.js';
// import Filieres from '../models/utilisateurs/Filieres.js';

// export const Universite = async () =>{
//     const Universite = await Universites.findAll()
//     return Universite.map(data =>(data.dataValues));
// };

// export const Faculte = async () =>{
//     const Faculte = await Facultes.findAll()
//     return Faculte.map(data =>(data.dataValues));
// };

// export const Departement = async () =>{
//     const Departement = await Departements.findAll()
//     return Departement.map(data =>(data.dataValues));
// };

// export const Filiere = async () =>{
//     const Filiere = await Filieres.findAll()
//     return Filiere.map( data => (data.dataValues));
// }

import Universites from '../models/utilisateurs/Universites.js';
import Facultes from '../models/utilisateurs/Facultes.js';
import Departements from '../models/utilisateurs/Departements.js';
import Filieres from '../models/utilisateurs/Filieres.js';


// const removeDuplicates = (array, property) => {
//   return Array.from(new Map(array.map(item => [item[property], item])).values());
// };

const removeDuplicates = (array, property) => {
    const seen = new Set();
    return array.filter(item => {
      const value = item[property];
      if (!seen.has(value)) {
        seen.add(value);
        return true;
      }
      return false;
    });
  };

export const Universite = async () => {
  const universites = await Universites.findAll();
  const data = universites.map(data => data.dataValues);
  return removeDuplicates(data, 'nomUniversite');
};

export const Faculte = async () => {
  const facultes = await Facultes.findAll();
  const data = facultes.map(data => data.dataValues);
  return removeDuplicates(data, 'nomFaculte');
};

export const Departement = async () => {
  const departements = await Departements.findAll();
  const data = departements.map(data => data.dataValues);
  return removeDuplicates(data, 'nomDepartement');
};

export const Filiere = async () => {
  const filieres = await Filieres.findAll();
  const data = filieres.map(data => data.dataValues);
  return removeDuplicates(data, 'nomFiliere');
};

