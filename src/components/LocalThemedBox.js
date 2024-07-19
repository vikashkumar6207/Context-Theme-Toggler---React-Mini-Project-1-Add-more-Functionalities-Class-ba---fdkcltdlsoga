import React from 'react';


const LocalThemedBox = () => {
    const { theme: globalTheme } = useTheme();
    const [localTheme, setLocalTheme] = useState(globalTheme);
  
    useEffect(() => {
      setLocalTheme(globalTheme);
    }, [globalTheme]);
  
    const toggleLocalTheme = () => {
      setLocalTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
    };
return(
    <div style={{width:'200px',height:'200px',border:'2px solid green'}} id="local-themed-box">
        {/* Write code below this line */}
        <p id="local-themed-text-container" className={`txt-${localTheme}`}>
            This is a local themed text container.
          </p>
          <button
            id="local-theme-toggler"
            className={`btn btn-${localTheme}`}
            onClick={toggleLocalTheme}
          >
            Toggle local theme to {localTheme === 'light' ? 'dark' : 'light'}
          </button>
        
    </div>
)
}

export { LocalThemedBox }