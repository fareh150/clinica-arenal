export interface Testimonial {
  name: string;
  text: string;
  rating: number;
  date: string;
  featured: boolean;
}

export const testimonials: Testimonial[] = [
  {
    name: 'Fco. Javier Benito',
    text: 'Muy buenos fisios. Con "mis pequeños achaques" siempre me arreglan. En especial Gemma, aunque Silvia y Carlos también son estupendos. Las clases de pilates también muy bien, se adaptan y te adaptan el ejercicio que toque a "tus cosas/achaques". Muy contento con la clínica y sus profesionales.',
    rating: 5,
    date: 'Hace 10 meses',
    featured: true,
  },
  {
    name: 'Armando Polo',
    text: 'He probado muchos fisios pero, definitivamente no hay punto de comparación con Silvia... te deja como nuevo.',
    rating: 5,
    date: 'Hace 5 meses',
    featured: true,
  },
  {
    name: 'S.',
    text: 'En la Clínica Arenal se aprecia el compromiso y la profesionalidad de todo su equipo. Quiero destacar especialmente a Silvia y Gema, quienes son unas fisioterapeutas excepcionales. Su trato cercano, su experiencia y su dedicación hacen que...',
    rating: 5,
    date: 'Hace 11 meses',
    featured: true,
  },
  {
    name: 'ra fan',
    text: 'Completamente de acuerdo con las otras reseñas. Personal muy atento. Esta última vez me atendió Gemma y he disfrutado muchísimo. Sus manos detectan el problema de inmediato y alivian tus molestias.',
    rating: 5,
    date: 'Hace 10 meses',
    featured: true,
  },
  {
    name: 'M. Eugenia Iglesias',
    text: 'Fui a esta clínica sin conocer ninguna referencia de sus profesionales, iba con un poco de desconfianza, sin saber con lo que me iba a encontrar. Me atendió la fisioterapeuta Gema, una excepcional profesional, salí muy satisfecha de la...',
    rating: 5,
    date: 'Hace 8 meses',
    featured: false,
  },
  {
    name: 'Javier Fdez',
    text: 'Muy buen trato y muy agradables, buenos profesionales.',
    rating: 5,
    date: 'Hace un mes',
    featured: false,
  },
  {
    name: 'Centro de negocios Arbós 9',
    text: 'Equipo de profesionales maravilloso. Vamos todas las semanas a pilates, y cuando es necesario también vamos a fisioterapia. Estamos muy contentos con el trato personal y su amabilidad.',
    rating: 5,
    date: 'Hace 7 años',
    featured: false,
  },
];
