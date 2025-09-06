<template>
  <div class="navigation-menu">
    <nav class="navbar navbar-expand-lg navbar-dark">
      <div class="container">
        <router-link class="navbar-brand" to="/">
          <img src="../assets/logo.png" alt="SmartBook" height="40" class="me-2">
          <span class="brand-text">SmartBook</span>
        </router-link>
        
        <button 
          class="navbar-toggler" 
          type="button" 
          @click="toggleMenu"
          :class="{ collapsed: !isMenuOpen }"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        
        <div class="navbar-collapse" :class="{ show: isMenuOpen }">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item dropdown">
              <a 
                class="nav-link dropdown-toggle" 
                href="#" 
                @click.prevent="toggleDropdown('analysis')"
                :class="{ show: dropdowns.analysis }"
              >
                <i class="el-icon-document"></i>
                Analysis
              </a>
              <ul class="dropdown-menu" :class="{ show: dropdowns.analysis }">
                <li>
                  <router-link class="dropdown-item" to="/analysis-pages">
                    <i class="el-icon-reading"></i>
                    Analysis Pages
                  </router-link>
                </li>
                <li>
                  <router-link class="dropdown-item" to="/ukraine-list">
                    <i class="el-icon-s-flag"></i>
                    Ukraine Analysis
                  </router-link>
                </li>
                <li>
                  <router-link class="dropdown-item" to="/covid-list">
                    <i class="el-icon-warning"></i>
                    COVID Analysis
                  </router-link>
                </li>
              </ul>
            </li>
            
            <li class="nav-item dropdown">
              <a 
                class="nav-link dropdown-toggle" 
                href="#" 
                @click.prevent="toggleDropdown('smartbook')"
                :class="{ show: dropdowns.smartbook }"
              >
                <i class="el-icon-notebook-1"></i>
                SmartBooks
              </a>
              <ul class="dropdown-menu" :class="{ show: dropdowns.smartbook }">
                <li>
                  <router-link class="dropdown-item" to="/smartbook-turkey-syria-earthquake">
                    <i class="el-icon-lightning"></i>
                    Turkey-Syria Earthquake
                  </router-link>
                </li>
                <li>
                  <router-link class="dropdown-item" to="/smartbook">
                    <i class="el-icon-notebook-2"></i>
                    General SmartBook
                  </router-link>
                </li>
              </ul>
            </li>
            
            <li class="nav-item">
              <router-link class="nav-link" to="/search">
                <i class="el-icon-search"></i>
                Search
              </router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'NavigationMenu',
  data() {
    return {
      isMenuOpen: false,
      dropdowns: {
        analysis: false,
        smartbook: false
      }
    }
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen
    },
    
    toggleDropdown(dropdown) {
      // Close all other dropdowns
      Object.keys(this.dropdowns).forEach(key => {
        if (key !== dropdown) {
          this.dropdowns[key] = false
        }
      })
      // Toggle the selected dropdown
      this.dropdowns[dropdown] = !this.dropdowns[dropdown]
    },
    
    closeAllDropdowns() {
      Object.keys(this.dropdowns).forEach(key => {
        this.dropdowns[key] = false
      })
    }
  },
  
  mounted() {
    // Close dropdowns when clicking outside
    document.addEventListener('click', (e) => {
      if (!this.$el.contains(e.target)) {
        this.closeAllDropdowns()
        this.isMenuOpen = false
      }
    })
  }
}
</script>

<style scoped>
.navigation-menu {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
  position: sticky;
  top: 0;
  z-index: 1000;
}

.navbar {
  padding: 1rem 0;
}

.navbar-brand {
  display: flex;
  align-items: center;
  text-decoration: none;
  color: white !important;
  font-weight: bold;
  font-size: 1.5rem;
}

.brand-text {
  margin-left: 0.5rem;
}

.navbar-toggler {
  border: none;
  padding: 0.25rem 0.5rem;
}

.navbar-toggler:focus {
  box-shadow: none;
}

.navbar-toggler-icon {
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'%3e%3cpath stroke='rgba%28255, 255, 255, 1%29' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e");
}

.navbar-nav {
  align-items: center;
}

.nav-item {
  margin: 0 0.5rem;
  position: relative;
}

.nav-link {
  color: rgba(255, 255, 255, 0.9) !important;
  text-decoration: none;
  padding: 0.75rem 1rem;
  border-radius: 8px;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  font-weight: 500;
}

.nav-link:hover {
  color: white !important;
  background: rgba(255, 255, 255, 0.1);
  transform: translateY(-2px);
}

.nav-link i {
  margin-right: 0.5rem;
  font-size: 1.1rem;
}

.dropdown {
  position: relative;
}

.dropdown-toggle::after {
  margin-left: 0.5rem;
}

.dropdown-menu {
  position: absolute;
  top: 100%;
  left: 0;
  background: white;
  border: none;
  border-radius: 10px;
  box-shadow: 0 10px 30px rgba(0,0,0,0.2);
  min-width: 200px;
  opacity: 0;
  visibility: hidden;
  transform: translateY(-10px);
  transition: all 0.3s ease;
  z-index: 1000;
}

.dropdown-menu.show {
  opacity: 1;
  visibility: visible;
  transform: translateY(0);
}

.dropdown-item {
  color: #2c3e50 !important;
  padding: 0.75rem 1.25rem;
  text-decoration: none;
  display: flex;
  align-items: center;
  transition: all 0.3s ease;
  border-radius: 8px;
  margin: 0.25rem 0.5rem;
}

.dropdown-item:hover {
  background: #f8f9ff;
  color: #667eea !important;
  transform: translateX(5px);
}

.dropdown-item i {
  margin-right: 0.75rem;
  font-size: 1rem;
  width: 16px;
}

.router-link-active {
  background: rgba(255, 255, 255, 0.2) !important;
  color: white !important;
}

/* Mobile Responsive */
@media (max-width: 991px) {
  .navbar-collapse {
    background: rgba(255, 255, 255, 0.95);
    backdrop-filter: blur(10px);
    border-radius: 10px;
    margin-top: 1rem;
    padding: 1rem;
  }
  
  .nav-link {
    color: #2c3e50 !important;
    margin: 0.25rem 0;
  }
  
  .nav-link:hover {
    background: #f8f9ff;
    color: #667eea !important;
  }
  
  .dropdown-menu {
    position: static;
    box-shadow: none;
    background: #f8f9ff;
    margin: 0.5rem 0;
    border-radius: 8px;
  }
  
  .dropdown-item {
    padding: 0.5rem 1rem;
  }
}

/* Animation for navbar collapse */
.navbar-collapse {
  transition: all 0.3s ease;
}

.navbar-collapse:not(.show) {
  display: none;
}

@media (max-width: 991px) {
  .navbar-collapse.show {
    display: block;
    animation: slideDown 0.3s ease;
  }
}

@keyframes slideDown {
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
