import React, { useState } from 'react';
import { 
  Users, 
  GraduationCap, 
  DollarSign, 
  Bell, 
  Settings,
  Search,
  Menu,
  X,
  MessageSquare,
  TrendingUp,
  Calendar,
  Compass
} from 'lucide-react';
import AlumniDirectory from './components/directory/AlumniDirectory';
import MentorshipDirectory from './components/mentorship/MentorshipDirectory';

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [activeTab, setActiveTab] = useState('dashboard');

  const notifications = [
    { id: 1, title: 'New contribution received', time: '2 hours ago' },
    { id: 2, title: 'Alumni meetup next week', time: '1 day ago' },
    { id: 3, title: 'Profile update reminder', time: '2 days ago' },
  ];

  const recentContributions = [
    { id: 1, name: 'John Doe', amount: 500, date: '2024-03-15' },
    { id: 2, name: 'Jane Smith', amount: 1000, date: '2024-03-14' },
    { id: 3, name: 'Mike Johnson', amount: 750, date: '2024-03-13' },
  ];

  const upcomingEvents = [
    { id: 1, title: 'Annual Alumni Dinner', date: 'March 25, 2024' },
    { id: 2, title: 'Career Mentorship Program', date: 'April 5, 2024' },
    { id: 3, title: 'Fundraising Gala', date: 'April 15, 2024' },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case 'alumni':
        return <AlumniDirectory />;
      case 'mentorship':
        return <MentorshipDirectory />;
      case 'dashboard':
        return (
          <main className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Stats Cards */}
              <div className="bg-white rounded-xl shadow-sm p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600">Total Alumni</p>
                    <h3 className="text-2xl font-bold mt-1">2,547</h3>
                  </div>
                  <div className="bg-indigo-100 p-3 rounded-lg">
                    <Users className="w-6 h-6 text-indigo-600" />
                  </div>
                </div>
                <div className="mt-4">
                  <div className="flex items-center text-sm text-green-600">
                    <TrendingUp className="w-4 h-4 mr-1" />
                    <span>12% increase</span>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-sm p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600">Total Contributions</p>
                    <h3 className="text-2xl font-bold mt-1">$157,892</h3>
                  </div>
                  <div className="bg-green-100 p-3 rounded-lg">
                    <DollarSign className="w-6 h-6 text-green-600" />
                  </div>
                </div>
                <div className="mt-4">
                  <div className="flex items-center text-sm text-green-600">
                    <TrendingUp className="w-4 h-4 mr-1" />
                    <span>8.2% increase</span>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-sm p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600">Active Projects</p>
                    <h3 className="text-2xl font-bold mt-1">12</h3>
                  </div>
                  <div className="bg-purple-100 p-3 rounded-lg">
                    <Calendar className="w-6 h-6 text-purple-600" />
                  </div>
                </div>
                <div className="mt-4">
                  <div className="flex items-center text-sm text-green-600">
                    <TrendingUp className="w-4 h-4 mr-1" />
                    <span>3 new this month</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Recent Activity & Events */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
              {/* Recent Contributions */}
              <div className="bg-white rounded-xl shadow-sm p-6">
                <h2 className="text-lg font-semibold mb-4">Recent Contributions</h2>
                <div className="space-y-4">
                  {recentContributions.map((contribution) => (
                    <div key={contribution.id} className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="bg-indigo-100 p-2 rounded-lg">
                          <DollarSign className="w-5 h-5 text-indigo-600" />
                        </div>
                        <div>
                          <p className="font-medium">{contribution.name}</p>
                          <p className="text-sm text-gray-500">{contribution.date}</p>
                        </div>
                      </div>
                      <span className="font-semibold">${contribution.amount}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Upcoming Events */}
              <div className="bg-white rounded-xl shadow-sm p-6">
                <h2 className="text-lg font-semibold mb-4">Upcoming Events</h2>
                <div className="space-y-4">
                  {upcomingEvents.map((event) => (
                    <div key={event.id} className="flex items-center gap-3">
                      <div className="bg-purple-100 p-2 rounded-lg">
                        <Calendar className="w-5 h-5 text-purple-600" />
                      </div>
                      <div>
                        <p className="font-medium">{event.title}</p>
                        <p className="text-sm text-gray-500">{event.date}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Recent Notifications */}
            <div className="mt-6">
              <div className="bg-white rounded-xl shadow-sm p-6">
                <h2 className="text-lg font-semibold mb-4">Recent Notifications</h2>
                <div className="space-y-4">
                  {notifications.map((notification) => (
                    <div key={notification.id} className="flex items-center gap-3">
                      <div className="bg-orange-100 p-2 rounded-lg">
                        <Bell className="w-5 h-5 text-orange-600" />
                      </div>
                      <div>
                        <p className="font-medium">{notification.title}</p>
                        <p className="text-sm text-gray-500">{notification.time}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </main>
        );
      default:
        return (
          <div className="p-6">
            <h2 className="text-2xl font-bold">Coming Soon</h2>
            <p className="text-gray-600 mt-2">This feature is under development.</p>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Sidebar */}
      <aside className={`fixed inset-y-0 left-0 bg-indigo-700 text-white w-64 transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-200 ease-in-out lg:translate-x-0 z-50`}>
        <div className="p-6">
          <div className="flex items-center gap-3">
            <GraduationCap className="w-8 h-8" />
            <h1 className="text-xl font-bold">Kivaywa Alumni</h1>
          </div>
        </div>
        <nav className="mt-6">
          {[
            { name: 'Dashboard', icon: <TrendingUp />, id: 'dashboard' },
            { name: 'Alumni', icon: <Users />, id: 'alumni' },
            { name: 'Mentorship', icon: <Compass />, id: 'mentorship' },
            { name: 'Contributions', icon: <DollarSign />, id: 'contributions' },
            { name: 'Messages', icon: <MessageSquare />, id: 'messages' },
            { name: 'Events', icon: <Calendar />, id: 'events' },
            { name: 'Settings', icon: <Settings />, id: 'settings' },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`w-full flex items-center gap-3 px-6 py-3 text-sm ${activeTab === item.id ? 'bg-indigo-800' : 'hover:bg-indigo-600'}`}
            >
              {item.icon}
              {item.name}
            </button>
          ))}
        </nav>
      </aside>

      {/* Main Content */}
      <div className={`${isSidebarOpen ? 'lg:ml-64' : ''} transition-margin duration-200 ease-in-out`}>
        {/* Header */}
        <header className="bg-white shadow-sm">
          <div className="flex items-center justify-between px-6 py-4">
            <button
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              className="lg:hidden"
            >
              {isSidebarOpen ? <X /> : <Menu />}
            </button>
            <div className="flex-1 max-w-2xl ml-4">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search..."
                  className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-indigo-500"
                />
                <Search className="absolute left-3 top-2.5 text-gray-400 w-5 h-5" />
              </div>
            </div>
            <div className="flex items-center gap-4">
              <button className="relative">
                <Bell className="w-6 h-6 text-gray-600" />
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                  3
                </span>
              </button>
              <img
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt="Profile"
                className="w-8 h-8 rounded-full"
              />
            </div>
          </div>
        </header>

        {renderContent()}
      </div>
    </div>
  );
}

export default App;