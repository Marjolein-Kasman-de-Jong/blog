const calculateReadTime = (content) => {
    const wordCount = content.split(" ").length;
    // Math.ceil instead of Math.round to prevent readTime = 0 for very short blogs
    const readTime = Math.ceil(wordCount * 0.003);
    return readTime;
} 

export default calculateReadTime;