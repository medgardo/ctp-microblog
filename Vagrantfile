Vagrant.configure(2) do |config|
  config.vm.box = "ctp2016"
  config.vm.network "private_network", ip: "192.168.33.10"
  config.vm.synced_folder "./", "/opt/apps/"
end
