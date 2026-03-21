export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  image: string;
  qualifications: string[];
  specialties?: string[];
}

export const team: TeamMember[] = [
  {
    name: 'Silvia Arenal Antón',
    role: 'Directora y Fundadora — Fisioterapeuta y Osteópata',
    bio: 'Fisioterapeuta y osteópata con más de 14 años de experiencia, Silvia fundó la Clínica Arenal con el objetivo de ofrecer un tratamiento cercano, personalizado y de la máxima calidad. Colabora como fisioterapeuta con la Federación Madrileña de Balonmano.',
    image: '/images/team/silvia-arenal.jpg',
    qualifications: [
      'Diplomada en Fisioterapia por la Universidad Pontificia de Comillas (2001-2004)',
      'CEO en la Escuela de Osteopatía de Madrid (2004-2009)',
      'Especialista en Fisioterapia Conservadora e Invasiva del Síndrome de Dolor Miofascial y de la Fibromialgia (2011-2012)',
      'Monitora de Pilates Suelo (Matwork) y Pilates Materiales por la Federación Madrileña de Gimnasia',
      'Ecografía Morfo-Funcional para fisioterapeutas (Centro Universitario La Salle)',
      'Curso Gimnasia abdominal hipopresiva por Fisioformación',
    ],
    specialties: ['Osteopatía', 'Dolor Miofascial', 'Fibromialgia', 'Pilates', 'Hipopresivos'],
  },
  {
    name: 'Carlos Alberto Herrera Lozano',
    role: 'Fisioterapeuta',
    bio: 'Fisioterapeuta especializado en fisioterapia deportiva, Carlos aporta al equipo una visión moderna y basada en la evidencia científica. Su formación en Pilates le permite ofrecer un abordaje completo e integral.',
    image: '/images/team/carlos-herrera.jpg',
    qualifications: [
      'Grado de Fisioterapia por la Universidad Complutense de Madrid (2020-2024)',
      'Máster en Fisioterapia Deportiva (2024-2025)',
      'Curso Métodos de Pilates suelo para fisioterapeutas, UNEIZ',
    ],
    specialties: ['Fisioterapia Deportiva', 'Pilates', 'Rehabilitación'],
  },
  {
    name: 'Carla Yesenia Barra Gómez',
    role: 'Fisioterapeuta',
    bio: 'Fisioterapeuta en formación continua, Carla aporta al equipo las últimas técnicas en fisioterapia invasiva eco-guiada. Su formación en Pilates complementa perfectamente su perfil clínico.',
    image: '/images/team/carla-barra.jpg',
    qualifications: [
      'Grado en Fisioterapia, Universidad Rey Juan Carlos (2021-2025)',
      'Postgrado en Fisioterapia Invasiva Eco-guiada (2025-2026)',
      'Monitor de Pilates Suelo',
    ],
    specialties: ['Fisioterapia Invasiva', 'Ecografía', 'Pilates'],
  },
];
