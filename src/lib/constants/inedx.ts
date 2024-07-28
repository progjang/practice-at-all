export const BASE_URL = 'https://books-api.nomadcoders.workers.dev';
// const PATH = {
//   lists: `/lists`,
// };
// const PARAMETERS = {
//   name: 'name',
// };

type Emoji = { [property: string]: Info };
interface Info {
  emoji: string;
  backgroundColor: string;
}

export const EMOJI: Emoji = {
  'combined-print-and-e-book-fiction': {
    emoji: '📖',
    backgroundColor: 'hotpink',
  },
  'combined-print-and-e-book-nonfiction': {
    emoji: '📚',
    backgroundColor: '#8A2BE2',
  },
  'hardcover-fiction': {
    emoji: '📘',
    backgroundColor: '#4682B4',
  },
  'hardcover-nonfiction': {
    emoji: '📙',
    backgroundColor: '#FF4500',
  },
  'trade-fiction-paperback': {
    emoji: '📗',
    backgroundColor: '#32CD32',
  },
  'mass-market-paperback': {
    emoji: '📕',
    backgroundColor: '#FF0000',
  },
  'paperback-nonfiction': {
    emoji: '📓',
    backgroundColor: '#708090',
  },
  'e-book-fiction': {
    emoji: '📱',
    backgroundColor: '#00BFFF',
  },
  'e-book-nonfiction': {
    emoji: '📲',
    backgroundColor: '#006400',
  },
  'hardcover-advice': {
    emoji: '📒',
    backgroundColor: '#FFD700',
  },
  'paperback-advice': {
    emoji: '📄',
    backgroundColor: '#8B4513',
  },
  'advice-how-to-and-miscellaneous': {
    emoji: '📑',
    backgroundColor: '#4682B4',
  },
  'hardcover-graphic-books': {
    emoji: '📂',
    backgroundColor: '#A52A2A',
  },
  'paperback-graphic-books': {
    emoji: '📜',
    backgroundColor: '#556B2F',
  },
  manga: {
    emoji: '✨',
    backgroundColor: '#FF4500',
  },
  'combined-print-fiction': {
    emoji: '📀',
    backgroundColor: '#FFD700',
  },
  'combined-print-nonfiction': {
    emoji: '📼',
    backgroundColor: '#8A2BE2',
  },
  'chapter-books': {
    emoji: '📕',
    backgroundColor: '#FF6347',
  },
  'childrens-middle-grade': {
    emoji: '📗',
    backgroundColor: '#32CD32',
  },
  'childrens-middle-grade-e-book': {
    emoji: '📶',
    backgroundColor: '#00BFFF',
  },
  'childrens-middle-grade-hardcover': {
    emoji: '📘',
    backgroundColor: '#4682B4',
  },
  'childrens-middle-grade-paperback': {
    emoji: '📙',
    backgroundColor: '#FF4500',
  },
  'paperback-books': {
    emoji: '📔',
    backgroundColor: '#F08080',
  },
  'picture-books': {
    emoji: '🖼️',
    backgroundColor: '#ADD8E6',
  },
  'series-books': {
    emoji: '🎠',
    backgroundColor: '#FFE4C4',
  },
  'young-adult': {
    emoji: '📒',
    backgroundColor: '#FFD700',
  },
  'young-adult-e-book': {
    emoji: '📲',
    backgroundColor: '#1E90FF',
  },
  'young-adult-hardcover': {
    emoji: '📔',
    backgroundColor: '#FFA07A',
  },
  'young-adult-paperback': {
    emoji: '📎',
    backgroundColor: '#87CEFA',
  },
  animals: {
    emoji: '🐾',
    backgroundColor: '#FFDAB9',
  },
  'audio-fiction': {
    emoji: '🎧',
    backgroundColor: '#9370DB',
  },
  'audio-nonfiction': {
    emoji: '🎙️',
    backgroundColor: '#708090',
  },
  'business-books': {
    emoji: '💼',
    backgroundColor: '#4B0082',
  },
  celebrities: {
    emoji: '🌟',
    backgroundColor: '#FFD700',
  },
  'crime-and-punishment': {
    emoji: '🚔',
    backgroundColor: '#00008B',
  },
  culture: {
    emoji: '🏛️',
    backgroundColor: '#A9A9A9',
  },
  education: {
    emoji: '🎓',
    backgroundColor: '#4682B4',
  },
  espionage: {
    emoji: '🕵️',
    backgroundColor: '#2F4F4F',
  },
  'expeditions-disasters-and-adventures': {
    emoji: '🗺️',
    backgroundColor: '#DEB887',
  },
  'fashion-manners-and-customs': {
    emoji: '👗',
    backgroundColor: '#FF69B4',
  },
  'food-and-fitness': {
    emoji: '🍽️',
    backgroundColor: '#FF4500',
  },
  'games-and-activities': {
    emoji: '🎮',
    backgroundColor: '#8A2BE2',
  },
  'graphic-books-and-manga': {
    emoji: '📘',
    backgroundColor: '#4682B4',
  },
  'hardcover-business-books': {
    emoji: '📓',
    backgroundColor: '#2F4F4F',
  },
  health: {
    emoji: '🩺',
    backgroundColor: '#FF6347',
  },
  humor: {
    emoji: '😂',
    backgroundColor: '#A0522D',
  },
  'indigenous-americans': {
    emoji: '🦅',
    backgroundColor: '#8B4513',
  },
  relationships: {
    emoji: '❤️',
    backgroundColor: '#FF69B4',
  },
  'mass-market-monthly': {
    emoji: '🛒',
    backgroundColor: '#00CED1',
  },
  'middle-grade-paperback-monthly': {
    emoji: '📙',
    backgroundColor: '#FF4500',
  },
  'paperback-business-books': {
    emoji: '📄',
    backgroundColor: '#A9A9A9',
  },
  family: {
    emoji: '👨‍👩‍👧‍👦',
    backgroundColor: '#87CEFA',
  },
  'hardcover-political-books': {
    emoji: '🏛️',
    backgroundColor: '#00008B',
  },
  'race-and-civil-rights': {
    emoji: '✊',
    backgroundColor: '#A52A2A',
  },
  'religion-spirituality-and-faith': {
    emoji: '🙏',
    backgroundColor: '#FFD700',
  },
  science: {
    emoji: '🔬',
    backgroundColor: '#20B2AA',
  },
  sports: {
    emoji: '🏅',
    backgroundColor: '#FFD700',
  },
  travel: {
    emoji: '✈️',
    backgroundColor: '#87CEEB',
  },
  'young-adult-paperback-monthly': {
    emoji: '📗',
    backgroundColor: '#32CD32',
  },
};
