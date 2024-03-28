const formatDate = (date) => {
    const longOptions = { 
        year: 'numeric',
        month: 'long',
        day: 'numeric', 
      };
    
    const dateCreated = new Date(date);  
    return dateCreated.toLocaleDateString('nl-NL', longOptions);
} 

export default formatDate;