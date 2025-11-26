# Next.js Starter Template

A production-ready Next.js 15 starter template with authentication, form handling, and a scalable architecture.

## 🚀 Features

- ⚡ **Next.js 15** with App Router and Turbopack
- 🔐 **Authentication** - Cookie-based auth with protected routes
- 📝 **Form Handling** - TanStack Form + Zod validation
- 🎨 **UI Components** - shadcn/ui + Tailwind CSS 4
- 🔄 **State Management** - TanStack Query v5 + Zustand for client state
- 🎯 **TypeScript** - Full type safety with enums
- 🪝 **Custom Hooks** - Reusable logic patterns
- 📱 **Responsive** - Mobile-first design
- 🌙 **Toast Notifications** - Sonner for user feedback

## 📦 Tech Stack

- **Framework:** Next.js 15.5
- **Language:** TypeScript 5
- **Styling:** Tailwind CSS 4
- **UI Library:** Radix UI + shadcn/ui
- **Forms:** TanStack Form + Zod
- **Data Fetching:** TanStack Query + Axios
- **State Management:** Zustand
- **Icons:** Lucide React
- **Fonts:** Manrope (Google Fonts)

## 🏁 Getting Started

### Prerequisites

- Node.js 22+ and pnpm (or npm/yarn/bun)

### Installation

1. **Clone the repository**
```bash
git clone <your-repo-url>
cd nextjs-template
```

2. **Install dependencies**
```bash
pnpm install
```

3. **Set up environment variables**
```bash
cp .env.example .env
```
Edit `.env` with your configuration.

4. **Run the development server**
```bash
pnpm dev
```

5. **Open [http://localhost:3000](http://localhost:3000)**

The app will hot-reload as you edit files.

## 📁 Project Structure

```
nextjs-template/
├── src/
│   ├── app/                    # Next.js App Router (routes & API)
│   │   ├── page.tsx           # Home page (/)
│   │   ├── layout.tsx         # Root layout
│   │   ├── auth/              # Auth routes (/auth/*)
│   │   ├── user/              # Protected routes (/user/*)
│   │   └── api/               # API endpoints
│   │       └── auth/          # Auth API routes
│   ├── modules/                # Feature modules
│   │   ├── auth/              # Auth feature (login, register)
│   │   ├── home/              # Home page feature
│   │   └── user/              # User dashboard feature
│   ├── components/             # Reusable UI components
│   │   ├── ui/                # shadcn/ui base components
│   │   └── custom/            # Custom components
│   ├── hooks/                  # Custom React hooks
│   ├── services/               # API service layer (TanStack Query)
│   │   ├── auth-queries.ts    # Read operations (GET)
│   │   └── auth-mutations.ts  # Write operations (POST/PUT/DELETE)
│   ├── schemas/                # Zod validation schemas
│   ├── types/                  # TypeScript type definitions
│   ├── enums/                  # TypeScript enums
│   ├── store/                  # Zustand stores for client state
│   ├── lib/                    # Utilities and configured libraries
│   ├── providers/              # React context providers
│   └── middleware.ts           # Next.js middleware (auth protection)
├── public/                     # Static assets
└── ...config files
```

### 📂 Folder Purposes

| Folder | Purpose | Example |
|--------|---------|---------|
| `/app` | Next.js routes and API endpoints | `app/auth/login/page.tsx` |
| `/modules` | Feature-specific code | `modules/auth/_components/login-form.tsx` |
| `/components` | Reusable UI components | `components/ui/button.tsx` |
| `/hooks` | Custom React hooks | `hooks/use-toggle.ts` |
| `/services` | API calls with TanStack Query | `services/auth-mutations.ts` |
| `/schemas` | Zod validation schemas | `schemas/auth.schema.ts` |
| `/types` | TypeScript types | `types/auth.type.ts` || `/enums` | TypeScript enums | `enums/user-role.enum.ts` |
| `/store` | Zustand stores for client state | `store/counter.store.ts` || `/lib` | Utility functions & configs | `lib/axios.ts`, `lib/utils.ts` |
| `/providers` | React context providers | `providers/react-query-provider.tsx` |

### Key Conventions

- **Files/Folders:** `kebab-case` (e.g., `login-form.tsx`)
- **Components:** `PascalCase` (e.g., `LoginForm`)
- **Functions/Variables:** `camelCase` (e.g., `useAuthLogin`)
- **Private folders:** `_components/` (module-specific, not reusable)
- **Imports:** Use `@/` alias (e.g., `import { Button } from '@/components/ui/button'`)

## 🛠️ Available Scripts

```bash
pnpm dev          # Start development server with Turbopack
pnpm build        # Build for production
pnpm start        # Start production server
pnpm lint         # Run ESLint
```

## 🔑 Authentication Flow

This template includes a complete authentication system:

1. **Login/Register** - Forms with validation at `/auth/login` and `/auth/register`
2. **Cookie-based Auth** - HTTP-only cookies for security
3. **Protected Routes** - Middleware protects `/user/*` routes
4. **Auto-redirect** - Logged-in users can't access auth pages
5. **User Query** - `useAuthUser()` hook fetches current user

### API Routes

- `POST /api/auth/login` - User login
- `POST /api/auth/register` - User registration
- `POST /api/auth/logout` - User logout
- `GET /api/auth/me` - Get current user

## 🎨 Adding New Features

### Example: Adding a Blog Feature

1. **Create module structure:**
```bash
mkdir -p src/modules/blog/_components
```

2. **Create page component:**
```tsx
// src/modules/blog/blog-page.tsx
export default function BlogPage() {
  return <div>Blog</div>;
}
```

3. **Create route:**
```tsx
// src/app/blog/page.tsx
import BlogPage from '@/modules/blog/blog-page';
export default BlogPage;
```

4. **Add services, schemas, and types as needed:**
```bash
src/services/blog-queries.ts
src/services/blog-mutations.ts
src/schemas/blog.schema.ts
src/types/blog.type.ts
```

## 🧩 Custom Hooks

### `useToggle`

Toggle boolean state with ease:

```tsx
import { useToggle } from '@/hooks';

const [isOpen, toggle] = useToggle(false);

<Button onClick={toggle}>Toggle</Button>
```

## 🔢 Enums

> **Note:** The enums in `src/enums/` are provided as examples. Replace or extend them to fit your application's needs.

TypeScript enums are placed in the `src/enums/` folder for better organization.

### `UserRole` Enum

Define user roles with helper functions:

```typescript
import { UserRole, isAdminRole } from '@/enums/user-role.enum';

const userRole = UserRole.ADMIN;
if (isAdminRole(userRole)) {
    // Admin-specific logic
}
```

## 🗂️ State Management

### Zustand Stores

> **Note:** The store in `src/store/` is provided as an example. Replace or extend it with your own stores as needed.

Client-side state is managed with Zustand stores in `src/store/`.

#### Counter Store Example

```tsx
import { useCounterStore } from '@/store';

function CounterComponent() {
    const { count, increment, decrement, reset } = useCounterStore();

    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={increment}>+</button>
            <button onClick={decrement}>-</button>
            <button onClick={reset}>Reset</button>
        </div>
    );
}
```

### When to Use Zustand vs TanStack Query

- **Zustand**: Client-side state (UI state, local preferences, temporary data)
- **TanStack Query**: Server state (API data, caching, synchronization)

### Why separate `modules/` and `components/`?
- **Modules** = Feature-specific components (used once)
- **Components** = Reusable components (used across features)

### Why separate queries and mutations?
- Clearer separation of read vs write operations
- Easier to locate specific API calls
- Better organization as the app scales

### Why `_components/` with underscore?
- Signals "private/internal use only"
- Prevents accidental reuse of feature-specific components
- Keeps module boundaries clear

### Why separate `schemas/` and `types/`?
- **Schemas** = Runtime validation (Zod)
- **Types** = Compile-time types (TypeScript)
- Often both are needed for the same data structure

## 🔒 Security Features

- ✅ HTTP-only cookies for auth tokens
- ✅ Zod validation on all forms
- ✅ CSRF protection ready (extend API routes)
- ✅ Middleware route protection
- ✅ Type-safe API calls

## 📚 Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [TanStack Query](https://tanstack.com/query/latest)
- [TanStack Form](https://tanstack.com/form/latest)
- [Zustand](https://zustand-demo.pmnd.rs/)
- [shadcn/ui](https://ui.shadcn.com)
- [Tailwind CSS](https://tailwindcss.com)
- [Zod](https://zod.dev)

## 🚀 Deployment

### Option 1: Docker Compose (Recommended - Easiest)

**1. Create `docker-compose.yml`:**
```yaml
version: '3.8'

services:
  app:
    build: .
    ports:
      - "3000:3000"
    environment:
      - NODE_ENV=production
      - JWT_SECRET=${JWT_SECRET}
      - NEXT_PUBLIC_API_URL=${NEXT_PUBLIC_API_URL}
    restart: unless-stopped
```

**2. Create `.env` file:**
```env
JWT_SECRET=your-secret-key
NEXT_PUBLIC_API_URL=http://localhost:3000/api
```

**3. Run:**
```bash
docker-compose up -d
docker-compose logs -f  # View logs
docker-compose down     # Stop
```

---

### Option 2: Docker CLI (Manual Method)

If you prefer more control or don't want to use Docker Compose:

**Build the image:**
```bash
docker build -t nextjs-template .
```

**Run the container:**
```bash
# Basic
docker run -p 3000:3000 nextjs-template

# With environment file
docker run -p 3000:3000 --env-file .env nextjs-template

# Background mode
docker run -d -p 3000:3000 --name my-app nextjs-template
docker logs -f my-app
```

---

### Option 3: VPS Deployment (Ubuntu/Debian)

1. **Install dependencies:**
```bash
# Install Node.js 22
curl -fsSL https://deb.nodesource.com/setup_22.x | sudo -E bash -
sudo apt-get install -y nodejs

# Install pnpm
sudo npm install -g pnpm

# Install PM2 for process management
sudo npm install -g pm2
```

2. **Clone and setup:**
```bash
git clone <your-repo-url>
cd nextjs-template
pnpm install
```

3. **Configure environment:**
```bash
cp .env.example .env
nano .env  # Edit with your values
```

4. **Build the application:**
```bash
pnpm build
```

5. **Start with PM2:**
```bash
pm2 start npm --name "nextjs-template" -- start
pm2 save
pm2 startup  # Follow the instructions to enable startup on boot
```

6. **Setup Nginx reverse proxy:**
```nginx
server {
    listen 80;
    server_name your-domain.com;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}
```

7. **Enable site and reload Nginx:**
```bash
sudo ln -s /etc/nginx/sites-available/nextjs-template /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl reload nginx
```

8. **Setup SSL with Certbot (optional):**
```bash
sudo apt install certbot python3-certbot-nginx
sudo certbot --nginx -d your-domain.com
```

### Environment Variables

Make sure to set these in your deployment environment. See `.env.example` for the complete list of required variables.

### Monitoring and Logs

**With PM2:**
```bash
pm2 logs nextjs-template     # View logs
pm2 status                    # Check status
pm2 restart nextjs-template   # Restart app
```

**With Docker:**
```bash
docker logs -f <container-id>
docker stats
```

## 📝 License

MIT
