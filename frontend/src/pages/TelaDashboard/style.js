import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafefc',
  },
  contentContainer: {
    paddingTop: 50,
    paddingBottom: 20,
  },
  header: {
    alignItems: 'center',
    marginBottom: 10,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  searchContainer: {
    marginHorizontal: 20,
    marginBottom: 10,
  },
  input: {
    backgroundColor: '#ffffff',
    borderRadius: 25,
    paddingVertical: 12,
    paddingHorizontal: 20,
    fontSize: 16,
  },
  categories: {
    marginBottom: 20,
  },
  categoryBadge: {
    backgroundColor: '#ffffff',
    borderRadius: 20,
    paddingVertical: 8,
    paddingHorizontal: 15,
    marginRight: 10,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
  },
  categoryText: {
    fontSize: 14,
  },
  exploreButton: {
    paddingHorizontal: 20,
    marginBottom: 10,
  },
  exploreText: {
    color: '#0f9d58',
    fontWeight: '500',
  },
  sectionTitle: {
    paddingHorizontal: 20,
    marginBottom: 10,
  },
  sectionTitleText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1b5e20',
  },
  carousel: {
    paddingLeft: 20,
    height: 220,
    flexDirection: 'row',
  },
});
