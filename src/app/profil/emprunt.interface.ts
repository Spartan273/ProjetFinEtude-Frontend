import {Membre} from './membre.interface';
import {Article} from './article.interface';

export interface Emprunt {
  id: number;
  dateEmprunt: Date;
  dateRetour: Date;
  id_emprunteur: number;
  id_article: number;
  membres: Membre;
  articles: Article;
}
