import React, { useState, useEffect, useRef } from "react";
import { Search, ChevronDown, Eye, MessageCircle, Menu } from "lucide-react";
import { 
  generatedArticles,
  publishedArticles,
  scheduledArticles,
  archivedArticles,
  navigation,
  tabOptions, 
  paginationOptions,
  userProfile,
  accounts
} from "../Database/DummyData";
import { Dropdown, Checkbox, Avatar, TableSkeleton, EmptyState } from "../Component/Component";

const Select = ({ value, options, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const selectRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (selectRef.current && !selectRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative inline-block text-left mx-2" ref={selectRef}>
      <div>
        <button
          type="button"
          className="inline-flex justify-between items-center w-20 rounded-md border border-gray-300 shadow-sm px-2 py-1 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          onClick={() => setIsOpen(!isOpen)}
          aria-haspopup="true"
          aria-expanded={isOpen}
        >
          {value}
          <ChevronDown className="ml-1 h-4 w-4" aria-hidden="true" />
        </button>
      </div>

      {isOpen && (
        <div 
          className="origin-top-right absolute right-0 mt-2 w-20 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-50"
        >
          <div className="py-1" role="menu" aria-orientation="vertical">
            {options.map((option) => (
              <button
                key={option.value}
                className={`block w-full text-left px-4 py-2 text-sm ${
                  value === option.value ? 'bg-gray-100 text-gray-900' : 'text-gray-700'
                } hover:bg-gray-100`}
                onClick={() => {
                  onChange(option.value);
                  setIsOpen(false);
                }}
                role="menuitem"
              >
                {option.value}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default function Dashboard() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);
  const [selectedTab, setSelectedTab] = useState("generated");
  const [selectedRows, setSelectedRows] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [selectAll, setSelectAll] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [entriesPerPage, setEntriesPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  
  const articlesMap = {
    generated: generatedArticles,
    published: publishedArticles,
    scheduled: scheduledArticles,
    archived: archivedArticles
  };
  
  const [filteredArticles, setFilteredArticles] = useState(articlesMap[selectedTab] || []);
  const [displayedArticles, setDisplayedArticles] = useState([]);
  const [sidebarExpanded, setSidebarExpanded] = useState({ Articles: true });
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 0);


  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      if (window.innerWidth < 768) {
        setIsSidebarOpen(false);
      } else {
        setIsSidebarOpen(true);
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize(); 
    
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    setFilteredArticles(articlesMap[selectedTab] || []);
  }, [selectedTab]);

  useEffect(() => {
    if (searchQuery.trim() === "") {
      setFilteredArticles(articlesMap[selectedTab] || []);
    } else {
      const lowercaseQuery = searchQuery.toLowerCase();
      const filtered = (articlesMap[selectedTab] || []).filter(
        article => 
          article.title.toLowerCase().includes(lowercaseQuery) ||
          article.keyword.toLowerCase().includes(lowercaseQuery)
      );
      setFilteredArticles(filtered);
    }
    setCurrentPage(1); 
  }, [searchQuery, selectedTab]);

  useEffect(() => {
    const startIndex = (currentPage - 1) * entriesPerPage;
    const endIndex = startIndex + entriesPerPage;
    setDisplayedArticles(filteredArticles.slice(startIndex, endIndex));
    

    setSelectedRows([]);
    setSelectAll(false);
  }, [filteredArticles, currentPage, entriesPerPage]);

  const toggleDesktopSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const toggleMobileSidebar = () => {
    setIsMobileSidebarOpen(!isMobileSidebarOpen);
  };

  const toggleSidebarItem = (itemName) => {
    setSidebarExpanded({
      ...sidebarExpanded,
      [itemName]: !sidebarExpanded[itemName]
    });
  };

  const handleRowSelection = (id) => {
    if (selectedRows.includes(id)) {
      setSelectedRows(selectedRows.filter((rowId) => rowId !== id));
      if (selectAll) setSelectAll(false);
    } else {
      setSelectedRows([...selectedRows, id]);
      if (selectedRows.length + 1 === displayedArticles.length) {
        setSelectAll(true);
      }
    }
  };

  const handleSelectAll = () => {
    if (selectAll) {
      setSelectedRows([]);
    } else {
      setSelectedRows(displayedArticles.map(article => article.id));
    }
    setSelectAll(!selectAll);
  };


  const handleEntriesPerPageChange = (newValue) => {
    const numValue = parseInt(newValue, 10);
    setEntriesPerPage(numValue);
    setCurrentPage(1); 
  };

  const totalPages = Math.ceil(filteredArticles.length / entriesPerPage);

  const goToPage = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const handleTabChange = (value) => {
    if (selectedTab === value) return;
    
    setIsLoading(true);
    setSelectedTab(value);
    setSelectedRows([]);
    setSelectAll(false);
    
    setTimeout(() => {
      setIsLoading(false);
    }, 500);
  };

  const renderSidebar = (isMobile = false) => (
    <div 
      className={`bg-white border-r border-gray-200 ${
        isMobile 
          ? isMobileSidebarOpen 
            ? 'fixed inset-y-0 left-0 w-64 z-50 transform translate-x-0' 
            : 'fixed inset-y-0 left-0 w-64 z-50 transform -translate-x-full'
          : isSidebarOpen ? 'w-64' : 'w-16'
      } transition-all duration-300 flex flex-col h-full ${isMobile ? '' : 'hidden md:flex'}`}
    >

      {isMobile && isMobileSidebarOpen && (
        <div 
          className="fixed inset-0 bg-gray-600 bg-opacity-75 z-40"
          onClick={toggleMobileSidebar}
        ></div>
      )}

      <div className="p-4 border-b border-gray-200">
        <div className="flex items-center space-x-2">
          {(isSidebarOpen || isMobile) && <span className="font-bold text-xl">abun</span>}
          <button 
            onClick={isMobile ? toggleMobileSidebar : toggleDesktopSidebar}
            className={`${isSidebarOpen || isMobile ? 'ml-auto' : 'mx-auto'} text-gray-500 hover:text-gray-700`}
          >
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </div>

      <div className="p-3 border-b border-gray-200">
        <div className="flex items-center space-x-2 bg-gray-100 rounded-md p-2">
          <div className="w-6 h-6 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 flex-shrink-0"></div>
          {(isSidebarOpen || isMobile) && (
            <>
              <span className="text-sm font-medium truncate">{accounts[0].name}</span>
              <ChevronDown className="h-4 w-4 ml-auto" />
            </>
          )}
        </div>
      </div>

      <div className="flex-1 overflow-y-auto scrollbar-thin">
        <div className="py-2">
          {navigation.map((item, index) => (
            <div key={index}>
              <div 
                className={`flex items-center px-4 py-2 hover:bg-gray-100 cursor-pointer ${
                  item.active ? "text-blue-600" : ""
                }`}
                onClick={() => item.subItems && toggleSidebarItem(item.name)}
              >
                <span className="mr-3 flex-shrink-0">{item.icon}</span>
                {(isSidebarOpen || isMobile) && (
                  <>
                    <span className="text-sm font-medium truncate">{item.name}</span>
                    {item.subItems && (
                      <ChevronDown className={`h-4 w-4 ml-auto transition-transform ${
                        sidebarExpanded[item.name] ? 'transform rotate-180' : ''
                      }`} />
                    )}
                  </>
                )}
              </div>
              {(isSidebarOpen || isMobile) && item.subItems && sidebarExpanded[item.name] && (
                <div className="pl-10 pr-4">
                  {item.subItems.map((subItem, subIndex) => (
                    <div 
                      key={subIndex} 
                      className={`py-1.5 text-sm hover:text-blue-600 cursor-pointer ${
                        subItem.active ? "text-blue-600" : "text-gray-600"
                      }`}
                    >
                      {subItem.name}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>


      {(isSidebarOpen || isMobile) && (
        <div className="p-3 border-t border-gray-200">
          <div className="flex items-center">
            <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-500 mr-2">
              {userProfile.avatar || userProfile.name.charAt(0)}
            </div>
            <div className="flex-1">
              <div className="text-sm font-medium">{userProfile.name}</div>
              <div className="text-xs text-gray-500">{userProfile.plan} Plan</div>
            </div>
          </div>
          <div className="mt-2 text-xs text-gray-500">
            <div>{userProfile.wordsRemaining.toLocaleString()} words remaining</div>
          </div>
        </div>
      )}
    </div>
  );


  const renderArticleRow = (article) => {
    const commonCells = (
      <>
        <td className="px-2 md:px-4 py-3">
          <Checkbox
            checked={selectedRows.includes(article.id)}
            onChange={() => handleRowSelection(article.id)}
          />
        </td>
        <td className="px-2 md:px-4 py-3">
          <div className="truncate max-w-xs md:max-w-md">
            {article.title}
          </div>

          <div className="md:hidden text-xs text-gray-500 mt-1">
            {article.keyword} • {article.words} words • {article.createdOn}
          </div>
        </td>
        <td className="hidden md:table-cell px-4 py-3">{article.keyword}</td>
        <td className="hidden md:table-cell px-4 py-3">{article.words}</td>
      </>
    );

    switch (article.status) {
      case "published":
        return (
          <tr key={article.id} className="border-b border-gray-200 hover:bg-gray-50">
            {commonCells}
            <td className="hidden md:table-cell px-4 py-3">{article.publishedOn}</td>
            <td className="hidden md:table-cell px-4 py-3">{article.views}</td>
            <td className="hidden md:table-cell px-4 py-3">{article.backlinks}</td>
            <td className="px-2 md:px-4 py-3">
              <button className="px-2 md:px-3 py-1 text-blue-500 border border-blue-500 rounded-md hover:bg-blue-50 flex items-center">
                <Eye className="h-4 w-4 mr-1 md:mr-2" /> 
                <span className="hidden md:inline">View</span>
              </button>
            </td>
          </tr>
        );
      case "scheduled":
        return (
          <tr key={article.id} className="border-b border-gray-200 hover:bg-gray-50">
            {commonCells}
            <td className="hidden md:table-cell px-4 py-3">{article.createdOn}</td>
            <td className="hidden md:table-cell px-4 py-3">{article.scheduledFor}</td>
            <td className="px-2 md:px-4 py-3">
              <button className="px-2 md:px-3 py-1 text-blue-500 border border-blue-500 rounded-md hover:bg-blue-50 flex items-center">
                <Eye className="h-4 w-4 mr-1 md:mr-2" /> 
                <span className="hidden md:inline">View</span>
              </button>
            </td>
          </tr>
        );
      case "archived":
        return (
          <tr key={article.id} className="border-b border-gray-200 hover:bg-gray-50">
            {commonCells}
            <td className="hidden md:table-cell px-4 py-3">{article.createdOn}</td>
            <td className="hidden md:table-cell px-4 py-3">{article.archivedOn}</td>
            <td className="px-2 md:px-4 py-3">
              <button className="px-2 md:px-3 py-1 text-blue-500 border border-blue-500 rounded-md hover:bg-blue-50 flex items-center">
                <Eye className="h-4 w-4 mr-1 md:mr-2" /> 
                <span className="hidden md:inline">View</span>
              </button>
            </td>
          </tr>
        );
      default: 
        return (
          <tr key={article.id} className="border-b border-gray-200 hover:bg-gray-50">
            {commonCells}
            <td className="hidden md:table-cell px-4 py-3">{article.createdOn}</td>
            <td className="px-2 md:px-4 py-3">
              <button className="px-2 md:px-3 py-1 text-blue-500 border border-blue-500 rounded-md hover:bg-blue-50 flex items-center">
                <Eye className="h-4 w-4 mr-1 md:mr-2" /> 
                <span className="hidden md:inline">View</span>
              </button>
            </td>
            <td className="px-2 md:px-4 py-3">
              <Avatar className="h-8 w-8 bg-blue-100 text-blue-500">
                <span className="text-xs">AI</span>
              </Avatar>
            </td>
          </tr>
        );
    }
  };

  const renderTableHeaders = () => {
    const commonHeaders = (
      <>
        <th className="px-2 md:px-4 py-3 text-left">
          <Checkbox 
            checked={selectAll} 
            onChange={handleSelectAll} 
          />
        </th>
        <th className="px-2 md:px-4 py-3 text-left font-medium text-gray-600">Article Title</th>
        <th className="hidden md:table-cell px-4 py-3 text-left font-medium text-gray-600">Keyword [Traffic]</th>
        <th className="hidden md:table-cell px-4 py-3 text-left font-medium text-gray-600">Words</th>
      </>
    );

    switch (selectedTab) {
      case "published":
        return (
          <tr className="bg-gray-50 border-b border-gray-200">
            {commonHeaders}
            <th className="hidden md:table-cell px-4 py-3 text-left font-medium text-gray-600">Published On</th>
            <th className="hidden md:table-cell px-4 py-3 text-left font-medium text-gray-600">Views</th>
            <th className="hidden md:table-cell px-4 py-3 text-left font-medium text-gray-600">Backlinks</th>
            <th className="px-2 md:px-4 py-3 text-left font-medium text-gray-600">Action</th>
          </tr>
        );
      case "scheduled":
        return (
          <tr className="bg-gray-50 border-b border-gray-200">
            {commonHeaders}
            <th className="hidden md:table-cell px-4 py-3 text-left font-medium text-gray-600">Created On</th>
            <th className="hidden md:table-cell px-4 py-3 text-left font-medium text-gray-600">Scheduled For</th>
            <th className="px-2 md:px-4 py-3 text-left font-medium text-gray-600">Action</th>
          </tr>
        );
      case "archived":
        return (
          <tr className="bg-gray-50 border-b border-gray-200">
            {commonHeaders}
            <th className="hidden md:table-cell px-4 py-3 text-left font-medium text-gray-600">Created On</th>
            <th className="hidden md:table-cell px-4 py-3 text-left font-medium text-gray-600">Archived On</th>
            <th className="px-2 md:px-4 py-3 text-left font-medium text-gray-600">Action</th>
          </tr>
        );
      default: 
        return (
          <tr className="bg-gray-50 border-b border-gray-200">
            {commonHeaders}
            <th className="hidden md:table-cell px-4 py-3 text-left font-medium text-gray-600">Created On</th>
            <th className="px-2 md:px-4 py-3 text-left font-medium text-gray-600">Action</th>
            <th className="px-2 md:px-4 py-3 text-left font-medium text-gray-600">Publish</th>
          </tr>
        );
    }
  };

  return (
    <div className="flex h-screen bg-gray-50 overflow-hidden">

      {renderSidebar(false)}


      {renderSidebar(true)}


      <div className="flex-1 flex flex-col overflow-hidden">
  
        <main className="flex-1 overflow-y-auto p-3 md:p-6">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
              <h1 className="text-2xl font-bold">Articles</h1>
              
         
              <button 
                className="md:hidden bg-white p-2 rounded-md shadow-sm mt-2"
                onClick={toggleMobileSidebar}
                aria-label="Toggle menu"
              >
                <Menu className="h-5 w-5" />
              </button>
            </div>
            
 
            <div className="w-full mb-6">
              <div className="w-full flex overflow-x-auto scrollbar-hide border-b border-gray-200 pb-0 bg-transparent gap-2 md:gap-4">
                {tabOptions.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => handleTabChange(tab.id)}
                    className={`rounded-md px-3 py-2 whitespace-nowrap transition-colors ${
                      selectedTab === tab.id 
                        ? "bg-blue-500 text-white" 
                        : "bg-transparent text-gray-600 hover:bg-gray-100"
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
              
              <div className="pt-4 md:pt-6">
 
                {isLoading ? (
                  <div className="bg-white rounded-lg shadow">
                    <TableSkeleton />
                  </div>
                ) : (
                  <div className="bg-white rounded-lg shadow overflow-hidden">
           
                    {filteredArticles.length > 0 && (
                      <div className="p-3 md:p-4 border-b border-gray-200">
                        <div className="relative">
                          <Search className="h-5 w-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                          <input
                            type="text"
                            placeholder="Search for Title & Keywords..."
                            className="pl-10 w-full border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                          />
                        </div>
                      </div>
                    )}
                    
                    {filteredArticles.length > 0 ? (
                      <div className="overflow-x-auto">
                        <table className="min-w-full divide-y divide-gray-200">
                          <thead>
                            {renderTableHeaders()}
                          </thead>
                          <tbody className="bg-white divide-y divide-gray-200">
                            {displayedArticles.map(article => renderArticleRow(article))}
                          </tbody>
                        </table>
                      </div>
                    ) : (
                      <EmptyState tabName={selectedTab} />
                    )}
                    
                  
                    {filteredArticles.length > 0 && (
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between px-2 md:px-4 py-3 border-t border-gray-200">
                        <div className="flex flex-wrap items-center text-sm text-gray-500 mb-4 md:mb-0">
                          <span>Total {filteredArticles.length} Article{filteredArticles.length !== 1 ? 's' : ''}</span>
                          <span className="mx-1">|</span>
                          <div className="flex items-center flex-wrap">
                            <span>Show</span>
                            <Select
                              value={entriesPerPage}
                              options={paginationOptions.map(opt => ({ value: opt }))}
                              onChange={handleEntriesPerPageChange}
                            />
                            <span>entries per page</span>
                          </div>
                        </div>
                        <div className="flex items-center gap-2 self-center md:self-auto">
                          <button 
                            onClick={() => goToPage(currentPage - 1)}
                            disabled={currentPage === 1}
                            className={`px-2 py-1 rounded ${
                              currentPage === 1 
                                ? 'text-gray-300 cursor-not-allowed' 
                                : 'text-blue-500 hover:bg-blue-50'
                            }`}
                          >
                            Prev
                          </button>
                          <span className="text-sm">{currentPage} / {totalPages || 1}</span>
                          <button 
                            onClick={() => goToPage(currentPage + 1)}
                            disabled={currentPage === totalPages || totalPages === 0}
                            className={`px-2 py-1 rounded ${
                              currentPage === totalPages || totalPages === 0
                                ? 'text-gray-300 cursor-not-allowed' 
                                : 'text-blue-500 hover:bg-blue-50'
                            }`}
                          >
                            Next
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
        </main>
      </div>
      
      <div className="fixed bottom-6 right-6 z-40">
        <button className="bg-green-500 hover:bg-green-600 text-white rounded-full p-3 md:p-4 shadow-lg flex items-center justify-center">
          <MessageCircle className="h-5 w-5 md:h-6 md:w-6" />
        </button>
      </div>
    </div>
  );
}