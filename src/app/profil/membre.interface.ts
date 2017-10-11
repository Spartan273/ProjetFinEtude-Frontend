import { Adresse } from './adresse.interface';

export interface Membre {
  id: number;
  nom: string;
  prenom: string;
  id_adresse: number;
  courriel: string;
  photo: string;
  adresses: Adresse;
}
