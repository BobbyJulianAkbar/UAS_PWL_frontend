import "react-toastify/dist/ReactToastify.css";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import HomePage from "./pages/HomePage";
import RootLayout from "./layouts/RootLayout";
import LoginPage from "./pages/LoginPage";
import DashboardLayout from "./layouts/DashboardLayout";
import DashboardAdminPage from "./pages/dashboard/DashboardAdminPage";
import DataPetugasPage from "./pages/dashboard/DataPetugasPage";
import TambahPetugasPage from "./pages/dashboard/TambahPetugasPage";
import DataBukuPage from "./pages/dashboard/DataBukuPage";
import TambahBukuPage from "./pages/dashboard/TambahBukuPage";
import DataPinjamanPage from "./pages/dashboard/DataPinjamanPage";
import DataAnggotaPage from "./pages/dashboard/DataAnggotaPage";
import TambahAnggotaPage from "./pages/dashboard/TambahAnggotaPage";
import DashboardAnggotaLayout from "./layouts/DashboardAnggotaLayout";
import { DashboardAnggotaPage } from "./pages/anggota/DashboardAnggotaPage";
import LoginAnggotaPage from "./pages/LoginAnggotaPage";
import DetailBukuPage from "./pages/anggota/DetailBukuPage";
import PinjamBukuPage from "./pages/anggota/PinjamBukuPage";
import SelesaiPinjamBukuPage from "./pages/anggota/SelesaiPinjamBukuPage";
import { AuthProvider, RequireAuth } from "react-auth-kit";
import { ToastContainer } from "react-toastify";
import CheckAdminLayout from "./layouts/CheckAdminLayout";
import CheckAnggotaLayout from "./layouts/CheckAnggotaLayout";

const App = () => {
  const routes = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route element={<RootLayout />}>
          <Route path="/" element={<HomePage />} />,
        </Route>
        <Route element={<CheckAdminLayout />}>
          <Route
            element={
              <RequireAuth loginPath="/login">
                <DashboardLayout />
              </RequireAuth>
            }
          >
            <Route path="/dashboard" element={<DashboardAdminPage />} />,
            <Route path="/dashboard/petugas" element={<DataPetugasPage />} />,
            <Route
              path="/dashboard/petugas/tambah"
              element={<TambahPetugasPage />}
            />
            <Route path="/dashboard/anggota" element={<DataAnggotaPage />} />,
            <Route
              path="/dashboard/anggota/tambah"
              element={<TambahAnggotaPage />}
            />
            <Route path="/dashboard/buku" element={<DataBukuPage />} />,
            <Route path="/dashboard/buku/tambah" element={<TambahBukuPage />} />
            ,
            <Route
              path="/dashboard/peminjaman"
              element={<DataPinjamanPage />}
            />
            ,
          </Route>
        </Route>
        <Route element={<CheckAnggotaLayout />}>
          <Route
            element={
              <RequireAuth loginPath="/login-anggota">
                <DashboardAnggotaLayout />
              </RequireAuth>
            }
          >
            <Route
              path="/dashboard-anggota"
              element={<DashboardAnggotaPage />}
            />
            <Route
              path="/dashboard-anggota/detail/:id"
              element={<DetailBukuPage />}
            />
            <Route
              path="/dashboard-anggota/pinjam/:id"
              element={<PinjamBukuPage />}
            />
            <Route
              path="/dashboard-anggota/selesai-pinjam/:id"
              element={<SelesaiPinjamBukuPage />}
            />
          </Route>
        </Route>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/login-anggota" element={<LoginAnggotaPage />} />
      </>
    )
  );

  return (
    <>
      <ToastContainer />

      <AuthProvider authType="localstorage" authName="_auth">
        <RouterProvider router={routes} />
      </AuthProvider>
    </>
  );
};

export default App;
