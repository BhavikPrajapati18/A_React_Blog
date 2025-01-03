import { Client, Databases, Query } from "appwrite";
import conf from "../conf/conf";

export class AppwriteService {
  client = new Client();
  database;

  constructor() {
    this.client
      .setEndpoint(conf.appwriteUrlId)
      .setProject(conf.appwriteProjectId);
    this.database = new Databases(this.client);

    database = new Databases(this.client);
  }

  async createPost({ title, content, featuredImage, userId, slug }) {
    try {
      return await this.database.createDocument(
        (conf.appwriteDatabaseId = appwriteDatabaseId),
        (conf.appwriteCollectionId = appwriteCollectionId),
        slug,
        {
          title,
          content,
          featuredImage,
          userId,
        }
      );
    } catch (error) {
      console.log("AppwriteService -> createPost -> error", error);
      throw error;
    }
  }

  async updatePost(slug, { title, content, featuredImage, userId, status }) {
    try {
      return await this.database.updateDocument(
        (conf.appwriteDatabaseId = appwriteDatabaseId),
        (conf.appwriteCollectionId = appwriteCollectionId),
        slug,
        {
          title,
          content,
          featuredImage,
          userId,
          status,
        }
      );
    } catch (error) {
      console.log("AppwriteService -> deletePost -> error", error);
      throw error;
    }
  }

  async deletePost(slug) {
    try {
      await this.database.deleteDocument(
        this.conf.appwriteDatabaseId,
        this.conf.appwriteCollectionId,
        slug
      );
      return true;
    } catch (error) {
      console.log("AppwriteService -> deletePost -> error", error);
      return false;
    }
  }
  
  async getPost(slug) {
    try {
      return await this.database.getDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        slug
      )
    } catch (error) {
      console.log("AppwriteService -> getPost -> error", error);
    }
  }

  async getPosts(queries = [Query.equal("status", "active")]) {
    try {
      return await this.database.listDocuments(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        queries
      );
    } catch (error) {
      console.log("AppwriteService -> getPosts -> error", error);
    }
  }

// File methods storage

  async createFile(file) {
    try {
      return await this.database.createFile(
        conf.appwriteBucketId,
        ID.unique(),
        file
      );
    } catch (error) {
      console.log("AppwriteService -> createFile -> error", error);
    }
  }

  async deleteFile(fileId){
    try {
      await this.database.deleteFile(
        conf.appwriteBucketId,
        fileId
      )
      return true
    } catch (error) {
      console.log("AppwriteService -> deleteFile -> error", error);
      return false
    }
  }

  getFilePreview(fileId){
    return this.database.getFilePreview(
      conf.appwriteBucketId,
      fileId
    )
  }
}
