document.addEventListener('DOMContentLoaded', function() {
    // 示例数据 - 9个工具和9个项目模板
    const data = {
        profile: {
            name: "我的工作台",
            bio: "高效工具集合 | 项目管理系统"
        },
        tools: [
            {
                name: "GitHub",
                url: "https://github.com",
                icon: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath d='M12 .3a12 12 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2c-3.3.7-4-1.6-4-1.6-.6-1.4-1.4-1.8-1.4-1.8-1-.7.1-.7.1-.7 1.1.1 1.7 1.1 1.7 1.1 1 1.7 2.6 1.2 3.2 1 .1-.8.4-1.2.7-1.5-2.5-.3-5.1-1.2-5.1-5.5 0-1.2.4-2.2 1.1-3-.1-.3-.5-1.5.1-3.1 0 0 .9-.3 3 1.1a10.5 10.5 0 0 1 5.5 0c2.1-1.4 3-1.1 3-1.1.6 1.6.2 2.8.1 3.1.7.8 1.1 1.8 1.1 3 0 4.3-2.6 5.2-5.1 5.5.4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6A12 12 0 0 0 12 .3'/%3E%3C/svg%3E"
            },
            {
                name: "VSCode",
                url: "https://code.visualstudio.com",
                icon: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath d='M23.15 2.587L18.21.21a1.494 1.494 0 0 0-1.705.29l-9.46 8.63-4.12-3.128a.999.999 0 0 0-1.276.057L.327 7.261A1 1 0 0 0 .326 8.74L3.899 12 .326 15.26a1 1 0 0 0 .001 1.479L1.65 17.94a.999.999 0 0 0 1.276.057l4.12-3.128 9.46 8.63a1.492 1.492 0 0 0 1.704.29l4.942-2.377A1.5 1.5 0 0 0 24 20.06V3.939a1.5 1.5 0 0 0-.85-1.352zm-5.146 14.861L10.826 12l7.178-5.448v10.896z'/%3E%3C/svg%3E"
            },
            {
                name: "Figma",
                url: "https://figma.com",
                icon: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath d='M15.5 12c0 1.933-1.567 3.5-3.5 3.5S8.5 13.933 8.5 12s1.567-3.5 3.5-3.5 3.5 1.567 3.5 3.5zm-3.5-7C8.567 5 6 7.567 6 10.5S8.567 16 12 16s6-2.567 6-5.5S15.433 5 12 5zm0 14c-1.933 0-3.5 1.567-3.5 3.5h7c0-1.933-1.567-3.5-3.5-3.5zm0-7c-1.933 0-3.5 1.567-3.5 3.5s1.567 3.5 3.5 3.5 3.5-1.567 3.5-3.5-1.567-3.5-3.5-3.5z'/%3E%3C/svg%3E"
            },
            {
                name: "Notion",
                url: "https://notion.so",
                icon: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath d='M4 4h16v16H4V4zm2 2v12h12V6H6zm3 3h6v6H9V9zm1 1v4h4v-4h-4z'/%3E%3C/svg%3E"
            },
            {
                name: "ChatGPT",
                url: "https://chat.openai.com",
                icon: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z'/%3E%3C/svg%3E"
            },
            {
                name: "MDN",
                url: "https://developer.mozilla.org",
                icon: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z'/%3E%3C/svg%3E"
            },
            {
                name: "Google",
                url: "https://google.com",
                icon: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-5.5-8c0 1.93 1.57 3.5 3.5 3.5 1.24 0 2.36-.62 3-1.57l-1.42-1.42c-.36.87-1.22 1.49-2.18 1.49-1.34 0-2.45-1.11-2.45-2.5S10.16 9.5 11.5 9.5c.96 0 1.82.62 2.18 1.49l1.42-1.42C14.86 8.12 13.76 7.5 12.5 7.5c-1.93 0-3.5 1.57-3.5 3.5z'/%3E%3C/svg%3E"
            },
            {
                name: "YouTube",
                url: "https://youtube.com",
                icon: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath d='M10 15l5.19-3L10 9v6zm11.56-7.83c.13.47.22 1.1.28 1.9.07.8.1 1.49.1 2.16 0 .07-.8.16-1.43.28-1.9.13-.57.3-1.04.5-1.42.2-.38.45-.69.75-.94.3-.25.66-.44 1.06-.57.4-.13.86-.2 1.36-.2.5 0 .96.07 1.36.2.4.13.76.32 1.06.57.3.25.55.56.75.94.2.38.37.85.5 1.42.12.47.21 1.1.28 1.9.07.8.1 1.49.1 2.16 0 .07-.8.16-1.43.28-1.9.13-.57.3-1.04.5-1.42.2-.38.45-.69.75-.94.3-.25.66-.44 1.06-.57.4-.13.86-.2 1.36-.2.5 0 .96.07 1.36.2.4.13.76.32 1.06.57.3.25.55.56.75.94.2.38.37.85.5 1.42zM3.55 18.5c-.4-.13-.76-.32-1.06-.57-.3-.25-.55-.56-.75-.94-.2-.38-.37-.85-.5-1.42-.12-.47-.21-1.1-.28-1.9-.07-.8-.1-1.49-.1-2.16 0-.67.03-1.36.1-2.16.07-.8.16-1.43.28-1.9.13-.57.3-1.04.5-1.42.2-.38.45-.69.75-.94.3-.25.66-.44 1.06-.57.4-.13.86-.2 1.36-.2.5 0 .96.07 1.36.2.4.13.76.32 1.06.57.3.25.55.56.75.94.2.38.37.85.5 1.42.12.47.21 1.1.28 1.9.07.8.1 1.49.1 2.16 0 .07-.8.16-1.43.28-1.9.13-.57.3-1.04.5-1.42.2-.38.45-.69.75-.94.3-.25.66-.44 1.06-.57.4-.13.86-.2 1.36-.2.5 0 .96.07 1.36.2.4.13.76.32 1.06.57.3.25.55.56.75.94.2.38.37.85.5 1.42.12.47.21 1.1.28 1.9.07.8.1 1.49.1 2.16 0 .07-.8.16-1.43.28-1.9-.94-4.56-4.96-8-9.78-8-5.52 0-10 4.48-10 10 0 2.14.67 4.13 1.82 5.77.2.38.37.85.5 1.42.12.47.21 1.1.28 1.9.07.8.1 1.49.1 2.16 0 .07-.8.16-1.43.28-1.9z'/%3E%3C/svg%3E"
            },
            {
                name: "StackOverflow",
                url: "https://stackoverflow.com",
                icon: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath d='M18.08 16.33v3.75H5.42v-3.75H2.5v6.25h19v-6.25h-2.92zm-3.75-10.83l1.67 1.67-7.5 7.5-1.67-1.67 7.5-7.5zm-1.67-5l2.08 2.08-9.17 9.17-2.08-2.08 9.17-9.17zm-5 4.58l2.5 2.5-7.92 7.92-2.5-2.5 7.92-7.92z'/%3E%3C/svg%3E"
            }
        ],
        projects: [
            {
                name: "个人博客",
                url: "#",
                description: "技术分享平台",
                icon: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath d='M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z'/%3E%3C/svg%3E"
            },
            {
                name: "电商平台",
                url: "#",
                description: "在线购物系统",
                icon: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath d='M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z'/%3E%3C/svg%3E"
            },
            {
                name: "天气应用",
                url: "#",
                description: "实时天气查询",
                icon: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath d='M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM19 18H6c-2.21 0-4-1.79-4-4 0-2.05 1.53-3.76 3.56-3.97l1.07-.11.5-.95C8.08 7.14 9.94 6 12 6c2.62 0 4.88 1.86 5.39 4.43l.3 1.5 1.53.11c1.56.1 2.78 1.41 2.78 2.96 0 1.65-1.35 3-3 3z'/%3E%3C/svg%3E"
            },
            {
                name: "任务管理",
                url: "#",
                description: "个人待办事项",
                icon: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath d='M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm2 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z'/%3E%3C/svg%3E"
            },
            {
                name: "音乐播放器",
                url: "#",
                description: "在线音乐平台",
                icon: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath d='M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6zm-2 16c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z'/%3E%3C/svg%3E"
            },
            {
                name: "投资追踪",
                url: "#",
                description: "个人财务管理",
                icon: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath d='M3.5 18.49l6-6.01 4 4L22 6.92l-1.41-1.41-7.09 7.97-4-4L2 16.99z'/%3E%3C/svg%3E"
            },
            {
                name: "学习平台",
                url: "#",
                description: "在线课程系统",
                icon: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath d='M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82zM12 3L1 9l11 6 9-4.91V17h2V9L12 3z'/%3E%3C/svg%3E"
            },
            {
                name: "健身追踪",
                url: "#",
                description: "运动数据记录",
                icon: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath d='M13 5v6h1.17L12 13.17 9.83 11H11V5h2zm6.66 2.34l-1.41 1.41C17.84 8.09 18 8.52 18 9c0 1.1-.9 2-2 2s-2-.9-2-2c0-.48.16-.91.41-1.25l-1.41-1.41C12.34 7.16 11.75 7 11.11 7c-2.53 0-4.61 1.96-4.83 4.44L4 12.13V16h2v-2.07c0-.52.19-1 .5-1.36l1.54-1.96c.32-.4.77-.61 1.25-.61s.93.21 1.25.61l1.54 1.96c.31.36.5.84.5 1.36V19H9v2h6v-2h-1v-3.07c0-.52.19-1 .5-1.36l1.54-1.96c.32-.4.77-.61 1.25-.61s.93.21 1.25.61l1.54 1.96c.31.36.5.84.5 1.36V22h8v-9.88c0-3.15-2.23-5.83-5.34-6.78z'/%3E%3C/svg%3E"
            },
            {
                name: "旅行计划",
                url: "#",
                description: "行程规划工具",
                icon: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath d='M17.66 7.93L12 2.27 6.34 7.93c-3.12 3.12-3.12 8.19 0 11.31C7.9 20.8 9.95 21.58 12 21.58c2.05 0 4.1-.78 5.66-2.34 3.12-3.12 3.12-8.19 0-11.31zM12 19.59c-1.6 0-3.11-.62-4.24-1.76C6.62 16.69 6 15.19 6 13.59s.62-3.11 1.76-4.24L12 5.1v14.49z'/%3E%3C/svg%3E"
            }
        ]
    };

    // 初始化UI
    initTabs();
    initSearch();
    initContactButton();
    renderTools(data.tools);
    renderProjects(data.projects);
    updateProfile(data.profile);

    // 初始化标签页
    function initTabs() {
        const tabs = document.querySelectorAll('.tab');
        const tabContents = document.querySelectorAll('.tab-content');
        
        tabs.forEach(tab => {
            tab.addEventListener('click', () => {
                tabs.forEach(t => t.classList.remove('active'));
                tabContents.forEach(c => c.classList.remove('active'));
                
                tab.classList.add('active');
                const tabId = tab.getAttribute('data-tab');
                document.getElementById(tabId).classList.add('active');
                
                // 触发搜索过滤
                const searchInput = document.getElementById('search');
                if (searchInput.value) {
                    searchInput.dispatchEvent(new Event('input'));
                }
            });
        });
    }

    // 初始化搜索功能
    function initSearch() {
        const searchInput = document.getElementById('search');
        searchInput.addEventListener('input', function() {
            const activeTab = document.querySelector('.tab.active').getAttribute('data-tab');
            const searchTerm = this.value.toLowerCase();
            
            if (activeTab === 'tools') {
                filterItems('tools-container', data.tools, searchTerm);
            } else if (activeTab === 'projects') {
                filterItems('projects-container', data.projects, searchTerm);
            }
        });
    }

    // 初始化联系按钮
    function initContactButton() {
        const contactBtn = document.getElementById('contact-btn');
        const qrPopup = document.getElementById('qr-popup');
        
        contactBtn.addEventListener('click', function(e) {
            e.stopPropagation();
            const isVisible = qrPopup.style.opacity === '1';
            qrPopup.style.opacity = isVisible ? '0' : '1';
            qrPopup.style.visibility = isVisible ? 'hidden' : 'visible';
        });
        
        document.addEventListener('click', function() {
            qrPopup.style.opacity = '0';
            qrPopup.style.visibility = 'hidden';
        });
        
        qrPopup.addEventListener('click', function(e) {
            e.stopPropagation();
        });
    }

    // 渲染工具
    function renderTools(tools) {
        const container = document.getElementById('tools-container');
        container.innerHTML = '';
        
        tools.forEach(tool => {
            const item = createGridItem(tool);
            container.appendChild(item);
        });
    }

    // 渲染项目
    function renderProjects(projects) {
        const container = document.getElementById('projects-container');
        container.innerHTML = '';
        
        projects.forEach(project => {
            const item = createGridItem(project);
            container.appendChild(item);
        });
    }

    // 更新个人资料
    function updateProfile(profile) {
        if (profile.name) {
            document.querySelector('.name').textContent = profile.name;
        }
        if (profile.bio) {
            document.querySelector('.bio').textContent = profile.bio;
        }
    }

    // 创建网格项
    function createGridItem(item) {
        const element = document.createElement('a');
        element.href = item.url;
        element.target = '_blank';
        element.rel = 'noopener noreferrer';
        element.className = 'grid-item';
        
        if (item.icon) {
            element.innerHTML = `
                <img class="icon" src="${item.icon}" alt="${item.name}" loading="lazy">
                <span>${item.name}</span>
            `;
        } else {
            element.innerHTML = `
                <span class="icon icon-tool"></span>
                <span>${item.name}</span>
            `;
        }
        
        if (item.description) {
            element.title = item.description;
        }
        
        return element;
    }

    // 过滤项目
    function filterItems(containerId, items, searchTerm) {
        const container = document.getElementById(containerId);
        container.innerHTML = '';
        
        const filtered = items.filter(item => 
            item.name.toLowerCase().includes(searchTerm) || 
            (item.description && item.description.toLowerCase().includes(searchTerm))
        );
        
        filtered.forEach(item => {
            const element = createGridItem(item);
            container.appendChild(element);
        });
    }
});