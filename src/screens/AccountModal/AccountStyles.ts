import {StyleSheet} from 'react-native';
import colors from '../../utils/CustomColors';
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  title: {
    fontSize: 18,
    fontWeight: '500',
    marginLeft: 24,
    color: colors.textPrimary,
  },
  content: {
    flex: 1,
  },
  scrollContent: {
    paddingBottom: 60,
  },
  profileSection: {
    alignItems: 'center',
    paddingVertical: 24,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginBottom: 12,
    borderWidth: 2,
    borderColor: '#ccc',
    backgroundColor: '#8ab4f8',
  },
  signOutContainer: {
    marginTop: 32,
    marginBottom: 40,
    paddingHorizontal: 16,
  },
  signOutButton: {
    backgroundColor: '#f1f3f4',
    paddingVertical: 12,
    borderRadius: 4,
    alignItems: 'center',
  },
  signOutText: {
    color: '#202124',
    fontWeight: '500',
  },
  profileName: {
    fontSize: 20,
    fontWeight: '500',
    color: colors.textPrimary,
    marginBottom: 4,
  },
  accountView: {},
  profileEmail: {
    fontSize: 14,
    color: colors.textSecondary,
    marginBottom: 16,
  },
  manageButton: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 4,
    backgroundColor: colors.surface,
  },
  manageButtonText: {
    fontSize: 14,
    color: colors.textPrimary,
    fontWeight: '500',
  },
  section: {
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: colors.divider,
  },
  sectionTitle: {
    fontSize: 14,
    color: colors.textSecondary,
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  option: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
  optionIcon: {
    width: 40,
    alignItems: 'center',
  },
  optionText: {
    fontSize: 16,
    color: colors.textPrimary,
  },
});
