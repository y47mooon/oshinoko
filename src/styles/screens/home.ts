import { StyleSheet } from 'react-native';

export const homeStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  logo: {
    height: 40,
    width: 120,
    resizeMode: 'contain',
  },
  tabMenu: {
    flexDirection: 'row',
    paddingVertical: 10,
  },
  tab: {
    paddingHorizontal: 15,
    paddingVertical: 5,
    marginHorizontal: 5,
  },
  activeTab: {
    borderBottomWidth: 2,
    borderBottomColor: '#e91e63',
  },
  tabText: {
    fontSize: 16,
  },
  tagFilter: {
    paddingVertical: 10,
  },
  tag: {
    paddingHorizontal: 15,
    paddingVertical: 5,
    marginHorizontal: 5,
    backgroundColor: '#f0f0f0',
    borderRadius: 15,
  },
  tagText: {
    fontSize: 14,
  },
  section: {
    padding: 15,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  sectionMore: {
    color: '#666',
  },
});
