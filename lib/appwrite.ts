export const appwriteConfig = {
    endpoint : process.env.EXPO_PUBLIC_APPWRITE_ENDPOINT,
    platform : "com.paras.fastfood",
    projectId : process.env.EXPO_PUBLIC_APPWRITE_PROJECT_ID,
    databaseId : process.env.DATABASE_ID,
    userCollectionID : process.env.USER_COLLECTION_ID
}
