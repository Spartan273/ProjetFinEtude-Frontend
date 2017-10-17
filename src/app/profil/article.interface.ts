import {Membre} from './membre.interface';

export interface Article {
  id: number;
  nom: string;
  description: string;
  categorie: string;
  id_proprietaire: number;
  membres: Membre;
}
