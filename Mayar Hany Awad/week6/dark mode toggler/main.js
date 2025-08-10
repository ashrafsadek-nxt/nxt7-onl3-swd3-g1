document.addEventListener('DOMContentLoaded', () => {
            const themeToggle = document.getElementById('themeToggle');
            themeToggle.addEventListener('click', () => {
                const isDark = themeToggle.classList.contains('dark');
                
                if (isDark) {
                    document.body.classList.remove('dark-mode');
                    themeToggle.classList.remove('dark');
                    localStorage.setItem('theme', 'light');
                } else {
                    document.body.classList.add('dark-mode');
                    themeToggle.classList.add('dark');
                }
            });
        });