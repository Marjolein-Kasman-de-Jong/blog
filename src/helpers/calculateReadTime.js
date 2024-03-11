const calculateReadTime = (content) => {
    const wordCount = content.split(" ").length;
    const readTime = Math.ceil(wordCount * 0.003);
    return readTime;
} 

export default calculateReadTime;