export interface Product {
  id: number
  name: string
  image: string
  description: string
  shortDescription: string
  price: number
}

const products: Array<Product> = [
  {
    id: 1,
    name: 'Nike Training Club',
    image: '/placeholder.png',
    description:
      'Nike Training Club offers expert-designed workouts for every fitness level, from strength and endurance to yoga and mobility. Stream KinetiForm movement data directly into guided sessions for real-time biomechanical feedback on every rep.',
    shortDescription: 'Expert-designed workouts with real-time form feedback powered by KinetiForm.',
    price: 0,
  },
  {
    id: 2,
    name: 'FitOn',
    image: '/placeholder.png',
    description:
      'FitOn delivers free, celebrity-trainer-led workouts across HIIT, Pilates, strength, and cardio. KinetiForm integration adds live form scoring to every session — personal-trainer-level feedback without the price tag.',
    shortDescription: 'Free guided workouts with live KinetiForm form scoring.',
    price: 0,
  },
  {
    id: 3,
    name: 'Strong',
    image: '/placeholder.png',
    description:
      'Strong is the go-to workout tracker for lifters, logging sets, reps, and weight with a clean interface. Paired with KinetiForm, every set gets form-quality data so progressive overload decisions are based on technique, not ego.',
    shortDescription: 'Strength tracking paired with KinetiForm form-quality data.',
    price: 0,
  },
  {
    id: 4,
    name: 'Planet Fitness',
    image: '/placeholder.png',
    description:
      'The Planet Fitness app guides members through machine circuits and free-weight zones. KinetiForm integration adds real-time posture cues to every gym visit, making workouts safer and more effective for all experience levels.',
    shortDescription: 'Gym workout guidance with real-time KinetiForm posture cues.',
    price: 0,
  },
]

export default products
