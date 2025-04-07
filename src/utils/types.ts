export type RootStackParamList = {
  Home: undefined;
  Music: undefined;
  Translate: undefined;
  Scholar: undefined;
  SearchResults: {query: string};
  VoiceInput: undefined;
  SearchBar: {query?: string}; // optional param
  OpenCamera: undefined;
  ProfileModal: undefined;
  AccountModal: undefined;
  ImageResults: {imageUri: string | null};
};
