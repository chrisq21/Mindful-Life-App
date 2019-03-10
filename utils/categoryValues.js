import { Colors } from '../constants/colors'

export function getTitleByCategory(category) {
  const title = category === 'hip-hop' ? 'Mindful Hip Hop' : 'Mindful Sits';
  return title;
}

export function getUserSlugByCategoryAndLanguage(category, language) {
  let slug = category === 'hip-hop' ? 'mindful-life-hip-hop' : 'mindful-life-project';
  if (category != 'hip-hop' && language == 'spanish') {
    slug = 'user-825440555'
  }
  return slug
}

export function getThemeColorByCategory(category) {
  const color = category === 'hip-hop' ? Colors.orange : Colors.green;
  return color;
}

export function getDarkThemeColorByCategory(category) {
  const color = category === 'hip-hop' ? Colors.darkOrange : Colors.darkGreen;
  return color;
}

export function getLightThemeColorByCategory(category) {
  const color = category === 'hip-hop' ? Colors.lightOrange : Colors.lightGreen;
  return color;
}
