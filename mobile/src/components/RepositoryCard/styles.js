import {  StyleSheet } from "react-native";

const styles = StyleSheet.create({
  repositoryCard: {
    lineHeight: 37,
    marginBottom: 15,
    marginTop: 15,
    marginHorizontal: 15,
    backgroundColor: "#fff",
    padding: 25
  },
  repositoryTitle: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#8e44ad"
  },
  repositoryStars: {
    textAlign: "right",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  starIcon: {
    width: 20,
    height: 20,
    marginRight: 5
  },
  likes: {
    fontSize: 20,
    color: "#2c3e50"
  },
  owner: {
    fontSize: 18,
    color: "#2c3e50",
    paddingTop: 10
  },
  description: {
    fontSize: 17,
    color: "#2c3e50",
    paddingTop: 10
  },
  checkRepoBox: {
    backgroundColor: "#8e44ad",
    padding: 10,
    marginTop: 10
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 17,
    textAlign: "center"
  }
});

export default styles;
