const Styles = {
  flex: {flex: 1, color: 'white'},
  container: {
    flex: 1,
    padding: 16,
  },
  messageView: {
    padding: 8,
  },
  message: {
    backgroundColor: '#EFEFEF',
    paddingVertical: 10,
    borderRadius: 8,
    marginBottom: 8,
    maxWidth: '70%',
    minWidth: '35%',
    alignSelf: 'flex-end',
    paddingHorizontal: 20,
  },
  messageText: {
    fontSize: 16,
  },
  timeText: {
    fontSize: 12,
    textAlign: 'right',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderTopWidth: 1,
    borderColor: '#DDD',
    paddingVertical: 8,
    paddingHorizontal: 5,
  },
  input: {
    flex: 1,
    paddingHorizontal: 12,
    fontSize: 16,
  },
  sendButton: {
    padding: 8,
    backgroundColor: '#3B71CA',
    borderRadius: 8,
    marginLeft: 8,
  },
  sendButtonText: {
    color: 'white',
    fontSize: 16,
  },
  deleteView: {
    position: 'absolute',
    zIndex: 1,
    top: 5,
    right: 5,
    backgroundColor: '#DC4C64',
    padding: 5,
    borderRadius: 25,
    height: 25,
    width: 25,
    alignItems: 'center',
  },
  deleteImage: {height: 15, width: 13, resizeMode: 'contain'},
  headerView: {
    height: 50,
    backgroundColor: '#3B71CA',
    width: '100%',
    justifyContent: 'center',
  },
  headerText: {
    fontSize: 16,
    textAlign: 'center',
    color: 'white',
  },
};

export default Styles;
