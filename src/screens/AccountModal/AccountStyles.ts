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
    borderBottomColor: colors.divider,
  },
  title: {
    fontSize: 18,
    fontWeight: '500',
    color: colors.textPrimary,
    marginLeft: 24,
  },
  content: {
    flex: 1,
  },
  profileSection: {
    alignItems: 'center',
    paddingVertical: 24,
    borderBottomWidth: 1,
    borderBottomColor: colors.divider,
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
  signOutContainer: {
    paddingVertical: 24,
    alignItems: 'center',
  },
  signOutButton: {
    paddingVertical: 10,
    paddingHorizontal: 24,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: colors.divider,
  },
  signOutText: {
    fontSize: 14,
    color: colors.textPrimary,
    fontWeight: '500',
  },
});
