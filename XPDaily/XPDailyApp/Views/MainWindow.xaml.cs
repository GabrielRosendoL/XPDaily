using System.Windows;
using System.Windows.Controls;

namespace XPDailyApp.Views
{
    public partial class MainWindow : Window
    {
        public MainWindow()
        {
            InitializeComponent();
        }

        private void NavigateToFirstPage(object sender, RoutedEventArgs e)
        {
            // Navega para a p�gina FirstPage
            MainFrame.Navigate(new FirstPage());
        }
    }
}
