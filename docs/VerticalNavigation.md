# VerticalNavigation Component Requirements Document

## 1. Overview

The VerticalNavigation component is a sophisticated, feature-rich navigation sidebar component from the @learningpool/ui library. It provides a flexible vertical navigation structure with primary and secondary navigation items, support for drawer behaviors, Stream Home integration, avatar panels, and numerous customization options.

## 2. Component Architecture

The component uses a complex architecture that combines:

- A drawer-based navigation system with collapsible behavior
- Support for primary and secondary navigation items
- Custom notch design with background clipping for visual appeal
- Integrated avatar functionality with dropdown panel
- Stream Home integration with application switcher
- Animation effects for smooth transitions

## 3. Core Features

### 3.1. Navigation Structure

- **Primary Navigation**: Main navigation items displayed in the upper section
- **Secondary Navigation**: Utility navigation items displayed in the lower section
- **Hierarchical Navigation**: Support for nested navigation items via children property
- **Flyout Support**: Items can have flyout panels for additional content

### 3.2. Drawer Functionality

- **Collapsible Drawer**: Toggles between expanded and collapsed states
- **Persistent Mode**: Option to pin the navigation in expanded state
- **Animation Effects**: Smooth transitions between states
- **Toggle Controls**: Chevron icons to expand/collapse the navigation drawer

### 3.3. Visual Elements

- **Logo Support**: Displays a logo with optional text in the header
- **Custom Notch Design**: Specialized notch design for the drawer toggle
- **Customizable Styling**: Theming through MUI's theme system
- **Active State Highlighting**: Visual indication of the active navigation item
- **Shadow Effects**: Shadow overlay when drawer is expanded

### 3.4. Integration Features

- **Stream Home Integration**: Optional integration with Stream Home platform
- **Application Switcher**: Dialog for switching between different applications
- **Avatar Panel**: User profile panel with customizable actions
- **Support Links**: Optional display of help/support links

## 4. Component API

### 4.1. Navigation Item Properties

```typescript
interface IVerticalNavigationItemProps {
  label: string; // Display text (required)
  icon?: JSX.Element; // Icon to display
  onClick?: any; // Click handler
  isActive?: boolean; // Active state indicator
  children?: IVerticalNavigationItemProps[]; // Nested navigation items
  isDrawerOpen?: boolean; // Drawer state
  isContentOpen?: boolean; // Content panel state
  index?: number; // Position index
  isSecondary?: boolean; // Secondary nav indicator
  hasFlyout?: boolean; // Enables flyout behavior
  fullHeightFlyout?: boolean; // Full-height flyout option
  content?: JSX.Element; // Custom content
  style?: any; // Custom styling
  open?: boolean; // Item expansion state
  hasCustomContent?: boolean; // Custom content flag
  id?: string; // Unique identifier
}
```

### 4.2. Main Component Properties

#### Core Navigation Properties

```typescript
items?: IVerticalNavigationItemProps[];        // Primary navigation items
secondaryItems?: IVerticalNavigationItemProps[]; // Secondary navigation items
logo?: string;                               // Logo URL/component
logoText?: string;                           // Text displayed with logo
logoOnClick?: any;                           // Logo click handler
```

#### Drawer Control Properties

```typescript
isDrawerOpen?: boolean;                      // Controls drawer open state
isPersistent?: boolean;                      // Controls persistent state
setIsPersistent?: any;                       // Handler for persistent state
```

#### Stream Home Integration

```typescript
hasStreamHome?: boolean;                     // Enable Stream Home features
hideStreamHomeButton?: boolean;               // Hide Stream Home button
StreamHomeUrl?: string;                      // Stream Home URL
streamHomeAccessToken?: string;               // Access token
streamHomeBaseUrl?: string;                   // Base URL
streamHomeApiKey?: string;                    // API key
streamHomeApplications?: IApplication[];       // Applications list
```

#### Avatar Panel Properties

```typescript
hasAvatar?: boolean;                         // Show user avatar
avatarName?: string;                         // User name
avatarPanelLogoutString?: string;             // Logout text
avatarPanelOnClickLogout?: any;               // Logout handler
avatarPanelOnClickViewProfile?: any;          // View profile handler
avatarPanelViewProfileString?: string;        // View profile text
avatarPanelOnClickEditProfile?: any;          // Edit profile handler
avatarPanelEditProfileString?: string;        // Edit profile text
avatarPanelMenuItems?: Array<IAvatarMenuItemProps>; // Additional menu items
avatarPanelOnClickMainAction?: any;           // Main action handler
avatarPanelMainActionString?: string;         // Main action text
avatarPanelSettingItems?: Array<IAvatarMenuItemProps>; // Settings items
avatarPanelFootnote?: any;                    // Footer content
```

#### Miscellaneous Properties

```typescript
appRootID?: string;                          // App root element ID
localization?: any;                          // Localization strings
dataAttributes?: any;                        // Custom data attributes
showSupportLinks?: boolean;                  // Toggle support links
hidePromotionalCampaign?: boolean;           // Hide promotions
promotionalCampaigns?: IPromotionalCampaign[]; // Promotional content
```

## 5. Implementation Details

### 5.1. State Management

The component manages multiple states internally:

- **isDrawerOpen**: Controls the expanded/collapsed state of the drawer
- **isPersistent**: Controls if the drawer is pinned in expanded state
- **isAvatarOpen**: Controls the visibility of the avatar panel
- **isAppSwitcherOpen**: Controls the visibility of the app switcher dialog

### 5.2. Accessibility Features

- **ARIA Attributes**: Comprehensive ARIA attributes for screen readers
- **Keyboard Navigation**: Support for keyboard controls
- **Focus Management**: Proper focus handling between states
- **Tooltip Support**: Tooltips for collapsed items

### 5.3. Animation System

- Smooth animations for state transitions
- Staggered animation for navigation items
- Fade-in effects for items when drawer opens

### 5.4. Theming

- Adapts to Material-UI theme
- Uses theme-based colors for background and text
- Custom styling for navigation elements

## 6. Usage Scenarios

### 6.1. Basic Implementation

```tsx
<VerticalNavigation
  items={primaryNavItems}
  secondaryItems={secondaryNavItems}
  logo="/logo.png"
  logoText="Company Name"
/>
```

### 6.2. With Stream Home Integration

```tsx
<VerticalNavigation
  items={primaryNavItems}
  secondaryItems={secondaryNavItems}
  hasStreamHome={true}
  streamHomeApiKey="your-api-key"
  streamHomeBaseUrl="https://api.example.com"
  streamHomeAccessToken="your-access-token"
  streamHomeApplications={appList}
/>
```

### 6.3. With Avatar Panel

```tsx
<VerticalNavigation
  items={primaryNavItems}
  secondaryItems={secondaryNavItems}
  hasAvatar={true}
  avatarName="John Doe"
  avatarPanelOnClickLogout={handleLogout}
  avatarPanelOnClickViewProfile={handleViewProfile}
/>
```

## 7. Implementation Best Practices

### 7.1. Performance Considerations

- **Memoization**: Consider memoizing navigation items to prevent unnecessary re-renders
- **Animation Performance**: Be mindful of animation performance on lower-end devices

### 7.2. Accessibility

- Ensure all clickable elements have accessible names
- Test with screen readers to confirm proper announcement of state changes
- Maintain proper focus management when drawer state changes

### 7.3. Theming and Styling

- Use the MUI theme system for consistent styling
- Ensure proper contrast between background and text colors
- Use custom styling sparingly to maintain consistency

### 7.4. Stream Home Integration

- Provide all required authentication parameters for full functionality
- Handle potential authentication failures gracefully

## 8. Technical Limitations and Considerations

- Several properties are typed as `any`, requiring careful implementation
- Some accessibility workarounds are implemented for modal behavior
- The avatar panel shows/hides based on both the `hasAvatar` property and `avatarName` presence
- The property `avatarPanelShowHelpLinks` is deprecated and will be removed in version 2.x

## 9. Migration Notes

### 9.1. Upcoming Changes

- The `avatarPanelShowHelpLinks` property will be removed in version 2.x. Use `showSupportLinks` instead.
- Type safety improvements are planned for future releases to reduce use of `any` types.

## 10. Dependencies

- Requires React 16.8+ for hooks support
- Integrated with Material-UI component library
- Uses react-spring for animations
