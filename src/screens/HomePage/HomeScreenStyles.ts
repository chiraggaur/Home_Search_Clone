import {StyleSheet} from 'react-native';
export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#202124',
  },
  topBar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
    paddingTop: 28,
  },
  searchBarMini: {
    width: 40,
    height: 40,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  dot: {
    color: '#e8eaed',
    fontSize: 30,
    letterSpacing: -2,
  },
  searchText: {
    color: '#e8eaed',
    marginLeft: 8,
    flex: 1,
  },
  lensIcon: {
    width: 40,
    height: 40,
    marginRight: 12,
    marginLeft: 5,
  },
  avatar: {
    width: 32,
    height: 32,
    borderRadius: 16,
    position: 'absolute',
    right: 50,
    top: 35,
    backgroundColor: '#8ab4f8',
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatarText: {
    color: '#202124',
    fontWeight: 'bold',
  },
  logoContainer: {
    alignItems: 'center',
    marginVertical: 20,
  },
  logo: {
    width: 160,
    height: 50,
  },
  cameraButton: {
    marginLeft: 12,
  },
  quickLinkIconImage: {
    width: 40,
    height: 40,
    marginBottom: 6,
    borderRadius: 10,
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#303134',
    margin: 16,
    padding: 12,
    borderRadius: 24,
  },
  searchBarText: {
    color: '#9aa0a6',
    marginLeft: 12,
    fontSize: 16,
    flex: 1,
  },
  searchIcons: {
    flexDirection: 'row',
    gap: 12,
  },
  micIcon: {
    color: '#8ab4f8',
    marginTop: 4,
    fontSize: 28,
  },
  quickLinks: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginHorizontal: 16,
    marginBottom: 24,
  },
  quickLink: {
    alignItems: 'center',
    backgroundColor: '#303134',
    padding: 16,
    borderRadius: 24,
    width: 90,
  },
  quickLinkIcon: {
    fontSize: 24,
    marginBottom: 4,
  },
  quickLinkLabel: {
    color: '#e8eaed',
    fontSize: 12,
  },
  infoCards: {
    flexDirection: 'row',
    marginHorizontal: 16,
    gap: 12,
    marginBottom: 16,
  },
  weatherCard: {
    flex: 1,
    backgroundColor: '#303134',
    padding: 16,
    borderRadius: 16,
  },
  airQualityCard: {
    flex: 1,
    backgroundColor: '#303134',
    padding: 16,
    borderRadius: 16,
  },
  cardTitle: {
    color: '#e8eaed',
    fontSize: 16,
    marginBottom: 8,
  },
  weatherInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  temperature: {
    color: '#e8eaed',
    fontSize: 32,
  },
  weatherIcon: {
    fontSize: 24,
  },
  aqiInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  aqiLevel: {
    color: '#e8eaed',
    fontSize: 18,
  },
  aqiIcon: {
    fontSize: 24,
  },
  newsCard: {
    backgroundColor: '#303134',
    margin: 16,
    borderRadius: 16,
    overflow: 'hidden',
  },
  newsImage: {
    width: '100%',
    height: 200,
  },
  newsTitle: {
    color: '#e8eaed',
    fontSize: 16,
    padding: 16,
    lineHeight: 24,
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 12,
    backgroundColor: '#303134',
    borderTopWidth: 1,
    borderTopColor: '#404144',
  },
  navItem: {
    padding: 8,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: '#fff',
    paddingVertical: 20,
    paddingHorizontal: 15,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    elevation: 5,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 15,
    color: '#e8eaed',
    textAlign: 'center',
  },
  modalOption: {
    paddingVertical: 15,
    paddingHorizontal: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  modalOptionText: {
    fontSize: 16,
    color: '#e8eaed',
  },
});
